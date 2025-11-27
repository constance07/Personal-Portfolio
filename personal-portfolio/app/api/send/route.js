import { NextResponse } from "next/server";
import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from 'resend';

export async function POST(req) {

const resend = new Resend(process.env.RESEND_API_KEY);

/*Get Form Data from Request*/
  const body = await req.json();
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Serenity Buckner <contact@serenitybuckner.com>',
      to: ['serenc0107@gmail.com'],
      subject: 'Portfolio: Contact Form Submission',
      react: EmailTemplate({ 
        name: body.name || "empty",
        email: body.email || "empty",
        subject: body.subject || "empty",
        message: body.message || "empty",
      }),
      
    });

    if (error) {
    return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

