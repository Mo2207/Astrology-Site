
"use client";
import { Button } from "./button";
import { useState } from "react";

interface CheckoutButtonProps {
  className?: string;
  text: string;
}

export default function CheckoutButton({ className, text }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/stripe", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Stripe API Error:", errorData);
        throw new Error(errorData.error || "Failed to create checkout session");
      }
  
      const data = await response.json();
      if (data.url) {
        // redirect to stripe checkout url
        window.location.href = data.url;
      }
    } catch (error) {
        if (error instanceof Error) {
          console.error("Checkout error:", error.message);
        } else {
          console.error("Checkout error: An unknown error occurred", error);
        }
    } finally {
        // clean up loading
        setLoading(false);
    }
  };

  return (
    // <form action="app/api/stripe/route" method="POST">
    <section>
      <Button 
        type="submit" 
        role="link"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : text}
      </Button>
    </section>
    // </form>
  );
}
