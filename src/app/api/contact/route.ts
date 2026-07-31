import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const {email, phone, message}  = await req.json();

    try{
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "alexandretg99@gmail.com",
            subject: "New Portfolio Message",
            html: `
            <h2>New message from your portfolio contact form</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return Response.json({ success: true});
    } catch (error){
        return Response.json(
            {error: "Failed to send message"},
            {status: 500}
        );
    }
}
