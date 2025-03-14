
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '../../../lib/stripe';
import Stripe from 'stripe';

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

export async function POST() {
  try {
    // grab the headers from the post req
    const headersList = await headers();

    // origin = the user or local testing
    const origin = headersList.get('origin') || "http://localhost:3000";

    // price is set from stripe products
    const priceId = process.env.STRIPE_PRICE_ID;

    // Create Checkout Sessions from body params.
    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        // one-time payment
        mode: 'payment',

        // success and cancellation page urls
        success_url: `https://dashboard.stripe.com/sessions/{CHECKOUT_SESSION_ID}`,
        cancel_url: `https://dashboard.stripe.com/sessions/{CHECKOUT_SESSION_ID}`,
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
        { status: (err as any).statusCode || 500 }
      )
    }
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}