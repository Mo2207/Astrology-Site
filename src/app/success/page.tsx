"use client";

import Link from "next/link";
import { use, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if(sessionId) {
      window?.fbq?.("track", "Purchase", {
        value: 0.00,
        currency: "USD",
      })
    }
  }, [sessionId]);

  return (
    <section className="bg-white h-[100vh] flex justify-center items-center text-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold">🎉 Payment Successful!</h1>
        <p>Thank you for your purchase!</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 underline">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
