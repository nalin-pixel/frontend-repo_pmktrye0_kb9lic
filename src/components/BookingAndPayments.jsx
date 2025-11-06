import { useState } from "react";
import { CreditCard, Calendar, CheckCircle2 } from "lucide-react";

export default function BookingAndPayments() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !name) return;
    setSubmitted(true);
  };

  return (
    <section id="book" className="bg-white text-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Book your visit</h2>
            <p className="text-black/60 mb-6">Pick a date and time that suits you. We'll confirm instantly.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm mb-1">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Alex Morgan" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Time</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium">
                  <Calendar size={18} /> Schedule
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl border border-green-200 bg-green-50 text-green-800 flex items-center gap-2 max-w-md">
                <CheckCircle2 /> Appointment booked for {date} at {time}. See you soon, {name}!
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Payment methods</h3>
            <p className="text-black/60 mb-6">Pay in-store or online. We support all major methods.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-black/10">
                <div className="flex items-center gap-2 font-medium mb-1"><CreditCard size={18}/> Credit & Debit Cards</div>
                <p className="text-sm text-black/60">Visa, Mastercard, Amex</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10">
                <div className="font-medium mb-1">PayPal</div>
                <p className="text-sm text-black/60">Checkout with PayPal</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10">
                <div className="font-medium mb-1">Alipay</div>
                <p className="text-sm text-black/60">Secure payments in China</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10">
                <div className="font-medium mb-1">WeChat Pay</div>
                <p className="text-sm text-black/60">Popular across Asia</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-black/60">Note: This demo showcases UI only. Integrations can be added later.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
