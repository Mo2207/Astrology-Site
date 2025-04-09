
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

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("Webhook route hit!");
    console.log("Event:", event.type);

    // check if checkout session has completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Session data:", JSON.stringify(session, null, 2));
      const email = session.customer_details?.email; // email now available after payment

      // confirm email was included
      if (!email) {
        console.log("No email found in customer_details.");
        return NextResponse.json({ error: "Email missing." }, { status: 400 });
      }

      // course link
      const courseLink = "https://t.me/Intensiv_pro_resourse_bot";

      // send the email via resend
      await resend.emails.send({
        from: "Mariya Numerologist <no-reply@mariya-numerologist.com>",
        to: email,
        subject: "Your Course Link",
        react: EmailTemplate({ courseLink: courseLink }) as React.ReactElement,
      });

      console.log(`Email sent to ${email}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("Webhook error:", (err as Error).message);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 400 });
  }
}
