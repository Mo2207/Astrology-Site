"use client";

import Link from "next/link";

export default async function SuccessPage() {
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
