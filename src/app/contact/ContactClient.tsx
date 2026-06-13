"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ContactClient() {
  const email = "mohammadjassimbashir@proton.me";
  const linkedin = "https://linkedin.com/in/jassimbashir";

  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied((prev) => ({ ...prev, [key]: true }));

      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <Container>
      <div className="py-16 max-w-md">
        <h1 className="text-3xl font-bold mb-2">Get in touch</h1>

        <p className="text-gray-600 mb-8">
          You can reach me via Email or LinkedIn.
        </p>

        <div className="space-y-3 mb-10">
          <a
            href={`mailto:${email}`}
            className="block text-center rounded-lg bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-700 transition"
          >
            Send Email
          </a>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            Open in Gmail
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            Visit LinkedIn Profile
          </a>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">
            Copy contact details
          </h2>

          <div className="flex items-center justify-between border rounded-lg px-3 py-3">
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500">Email</span>
              <span className="text-sm font-medium">{email}</span>
            </div>

            <button
              onClick={() => handleCopy(email, "email")}
              className="w-20 text-xs font-medium text-right text-gray-700 hover:text-black transition"
            >
              {copied.email ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
