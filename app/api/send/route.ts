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
        const toBrian = await resend.emails.send({
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

        if (toBrian.error) {
            return NextResponse.json({ error: toBrian.error }, { status: 500 });
        }

        // 2. Send auto-responder to the sender
        await resend.emails.send({
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

        return NextResponse.json({ success: true });

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
