export default function VisitUs() {
  const locations = [
    { name: "Noir & Shear – Central", address: "100 Mercer St, New York, NY", phone: "+1 (212) 555-0170" },
    { name: "Noir & Shear – West", address: "500 Sunset Blvd, Los Angeles, CA", phone: "+1 (310) 555-0151" },
  ];

  return (
    <section id="visit" className="bg-black text-white">
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-4xl font-light">Visit Us</h2>
          <p className="mt-4 text-white/70 max-w-xl">Two minimalist salons defined by light, line, and material. Walk-ins welcome when available; reservations recommended.</p>
          <div className="mt-8 space-y-6">
            {locations.map(loc => (
              <div key={loc.name} className="border border-white/10 rounded-xl p-6">
                <div className="text-lg">{loc.name}</div>
                <div className="text-white/70 text-sm mt-1">{loc.address}</div>
                <div className="text-white/70 text-sm">{loc.phone}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/10 min-h-[360px]">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.990928968792!2d-73.99733292352327!3d40.72295343575618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f3b6a3f77%3A0x92cfa7a5e2d2e46b!2sMercer%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
