import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Custom Orders & Enquiries</h2>
            <p className="mt-3 text-gray-700">Tell us what you have in mind—colors, sizes, quantity—and we’ll get back within 24 hours.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p>WhatsApp: +91 90000 00000</p>
              <p>Email: hello@shawlresinstudio.com</p>
              <p>Instagram: @shawlresin.studio</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input required className="w-full rounded-md border-gray-300 focus:ring-rose-600 focus:border-rose-600" placeholder="Your name" />
              <input type="email" required className="w-full rounded-md border-gray-300 focus:ring-rose-600 focus:border-rose-600" placeholder="Email" />
              <input className="w-full rounded-md border-gray-300 focus:ring-rose-600 focus:border-rose-600" placeholder="Phone (optional)" />
              <textarea required rows={4} className="w-full rounded-md border-gray-300 focus:ring-rose-600 focus:border-rose-600" placeholder="What would you like to order?"></textarea>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md bg-rose-600 text-white px-5 py-2.5 font-medium hover:bg-rose-700">Send</button>
            {status === "sent" && (
              <p className="mt-3 text-sm text-green-700">Thanks! We’ll reach out shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
