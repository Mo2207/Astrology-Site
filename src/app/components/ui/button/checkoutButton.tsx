
"use client";
import { Button } from "./button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from 'next/navigation';

interface CheckoutButtonProps {
  className?: string;
  text: string;
}

export default function CheckoutButton({ text, className }: CheckoutButtonProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/checkout${audience ? `?audience=${audience}` : ""}`, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Stripe API Error:", errorData);
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      window?.fbq?.("track", "Lead");
  
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
    <section>
      <Button 
        type="submit" 
        role="link"
        onClick={handleCheckout}
        disabled={loading}
        className={className}
      >
        {loading ? t("processing") : text}
      </Button>
    </section>
  );
}
