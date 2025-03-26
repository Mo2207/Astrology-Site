
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

      // telegram/courseLink logic
      const botToken = process.env.TELEGRAM_BOT_TOKEN!;
      const channelId = '-1002548077845';

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/createChatInviteLink`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: channelId,
            member_limit: 1,
            creates_join_reques: false,
          }),
        }
      );

      // error for telegramResponse
      if (!telegramResponse.ok) {
        const errorText = await telegramResponse.text();
        console.error("❌ Telegram API failed:", errorText);
        return NextResponse.json({ error: "Failed to create Telegram invite link" }, { status: 500 });
      }

      // parse the response
      const telegramData = await telegramResponse.json();
      const courseLink = telegramData.result.invite_link;
      console.log("✅ Telegram invite link:", courseLink);

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
