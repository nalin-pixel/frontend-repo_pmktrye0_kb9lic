export default function MapSection() {
  return (
    <section id="locations" className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Find us</h2>
          <p className="text-white/70">Explore our imaginary locations across the city.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840148768717!2d144.95373631590428!3d-37.8162796797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f0c0c0c0c0c0!2sImaginary%20Salon!5e0!3m2!1sen!2s!4v1616171515151!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ul className="space-y-4">
            <li className="p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="font-medium">Noir & Shear Studio — Central</div>
              <div className="text-white/70 text-sm">123 Heritage Ave, Downtown</div>
            </li>
            <li className="p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="font-medium">Noir & Shear Studio — Riverside</div>
              <div className="text-white/70 text-sm">42 Riverbank Rd, East Side</div>
            </li>
            <li className="p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="font-medium">Noir & Shear Studio — Uptown</div>
              <div className="text-white/70 text-sm">9 Summit St, North District</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
