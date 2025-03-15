"use client";

// import { section } from "framer-motion/client";
// import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  // const searchParams = useSearchParams();
  // const sessionId = searchParams.get("session_id");

  return (
    <section className="bg-white h-[100vh] flex justify-center items-center text-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold">🎉 Payment Successful!</h1>
        <p>Thank you for your purchase!</p>
        {/* {sessionId && <p><strong>Session ID:</strong> {sessionId}</p>} */}
        <Link href="/" className="mt-4 inline-block text-blue-600 underline">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
