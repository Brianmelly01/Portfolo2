import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "Resend API Key is missing. Please check your .env file." }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { name, email, message } = await request.json();

        // 1. Send email to Brian
        const { data: brianData, error: brianError } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'Brianmelly008@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (brianError) {
            const errorMsg = typeof brianError === 'object' ? (brianError as any).message : String(brianError);
            return NextResponse.json({ error: errorMsg }, { status: 500 });
        }

        // 2. Send auto-responder to the sender
        // Note: Resend onboarding allows sending only to the owner's email address.
        // We check for the error property because Resend returns an error object rather than throwing on API-level issues.
        const { error: responderError } = await resend.emails.send({
            from: 'Brian Melly <onboarding@resend.dev>',
            to: email,
            subject: 'Message Received - Brian Melly',
            html: `
                <h3>Hi ${name},</h3>
                <p>I've received your message, thank you for contacting me and I'll respond in a few.</p>
                <br/>
                <p>Best regards,</p>
                <p>Brian Melly</p>
            `,
        });

        if (responderError) {
            console.error("Auto-responder failed (likely Resend onboarding restriction):", responderError);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : "An unexpected error occurred";
        return NextResponse.json({ error: errorMsg }, { status: 500 });
    }
}
