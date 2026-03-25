"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export function ContactForm() {
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Captcha Check
    if (!token) {
      alert("Bhai, please solve the captcha first! 🤖");
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 2. Access Key from .env.local
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      alert("Error: .env.local mein Access Key nahi mili!");
      setStatus("error");
      return;
    }

    // --- DOUBLE TOKEN FIX START ---
    // Pehle se bane hCaptcha fields ko saaf kar rahe hain taaki conflict na ho
    formData.delete("g-recaptcha-response");
    formData.delete("h-captcha-response");
    
    formData.append("access_key", accessKey);
    formData.append("h-captcha-response", token);
    // --- DOUBLE TOKEN FIX END ---

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setToken(null);
        captchaRef.current?.resetCaptcha();
        form.reset();
      } else {
        alert("Web3Forms Error: " + result.message);
        setStatus("error");
      }
    } catch (error) {
      alert("Network Error: Internet check karo!");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">Get In Touch</h2>
        <p className="text-gray-400 text-lg text-center">My inbox is always open.</p>
      </div>

      {status === "success" ? (
        <div className="bg-green-500/10 border border-green-500/50 p-10 rounded-2xl text-center shadow-lg">
          <div className="text-5xl mb-4 text-center">🚀</div>
          <h3 className="text-2xl font-bold text-green-500 mb-2 text-center">Message Sent!</h3>
          <p className="text-white/80 text-center">Bhai, message mil gaya hai. Main jaldi hi reply karunga!</p>
          <button 
            onClick={() => setStatus("idle")} 
            className="mt-6 text-blue-400 underline underline-offset-4 mx-auto block"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              name="name" 
              type="text" 
              placeholder="Name" 
              required 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              required 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" 
            />
          </div>

          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={5} 
            required 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
          />

          <div className="flex justify-center py-2">
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              onVerify={(t) => setToken(t)}
              ref={captchaRef}
              theme="dark"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"} 
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-blue-600/20"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}