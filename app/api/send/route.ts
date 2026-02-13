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
        // We use the simplest possible parameters to avoid triggering Resend's onboarding restrictions.
        const { data: brianData, error: brianError } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'brianmelly008@gmail.com',
            subject: `Contact Form: ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h3>New Message from your Portfolio</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        if (brianError) {
            console.error("Resend Error:", brianError);
            const errorMsg = typeof brianError === 'object' ? (brianError as any).message : String(brianError);
            return NextResponse.json({ error: errorMsg }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Server Error:", error);
        const errorMsg = error instanceof Error ? error.message : "An unexpected error occurred";
        return NextResponse.json({ error: errorMsg }, { status: 500 });
    }
}
