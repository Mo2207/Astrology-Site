
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/emailTemplate';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-02-24.acacia" });
const resend = new Resend(process.env.RESEND_API_KEY!);

// send customer course link email after checkout is completed
export async function POST(req: Request) {
  const payload = await req.text();
  const signature = req.headers.get("stripe-signature") || "";

  console.log("POST send email")

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // check if checkout session has completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const email = session.customer_email; // email now available after payment

      if (!email) {
        console.error("No email found.");
        return NextResponse.json({ error: "Email missing." }, { status: 400 });
      }

      const courseLink = "https://yourwebsite.com/courses"; // dynamic course link

      // send the email via resend
      await resend.emails.send({
        from: "Your Company <no-reply@yourdomain.com>",
        to: email,
        subject: "Your Course Access",
        react: EmailTemplate({ courseLink: courseLink }) as React.ReactElement,
      });

      console.log(`Email sent to ${email}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 400 });
  }
}
