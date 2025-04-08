
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '../../../lib/stripe';
import Stripe from 'stripe';
// import { Resend } from 'resend';
// import { EmailTemplate } from '@/app/components/emailTemplate';

// preflight browser options request to allow API requests from any origin
export async function OPTIONS() {
  return NextResponse.json({}, { 
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

// const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    // grab the headers from the post req
    const headersList = await headers();

    // origin = the user or local testing
    const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


    // default price is set from stripe products
    let productId = process.env.STRIPE_PRODUCT_ID!; // course product ID

    // check search parameters for audience
    const { searchParams } = new URL(req.url);
    const audience = searchParams.get('audience');

    // if audience=2 parameter is in url
    if (audience === '2') {
      productId = process.env.STRIPE_PRODUCT_ID_2!; // course product ID for audience 2
    }


    // fetch the price dynamically from Stripe
    const prices = await stripe.prices.list({
      product: productId, 
      active: true, // only active prices are fetched
      limit: 1, // Get the latest price
    });

    // Create Checkout Sessions from body params.
    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ["card"],
        line_items: [
          {
            price: prices.data[0].id,
            quantity: 1,
          },
        ],
        // one-time payment
        mode: 'payment',

        // force email collection
        billing_address_collection: "required", // Forces the user to enter billing info
        customer_creation: "always", // makes stripe create a customer with an email

        // success and cancellation page urls
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/?canceled=true`,
      }
    );

    // CORS headers again for the API post req back to user
    const response = NextResponse.json({ url: session.url }, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;

  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
      )
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}