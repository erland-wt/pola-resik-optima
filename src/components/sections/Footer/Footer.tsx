import NAV_LINKS from "@/components/layout/Navbar/navLinks";

const CONTACT = {
    address: "Jl. Raya Cipto Mangunkusumo, Kel.Sudimara timur, Kec.Ciledug, Kota Tangerang 15157",
    phoneDisplay: "+62 812-8170-0875",
    phoneRaw: "6281281700875",
    location: {
    lat: -6.234389,
    lng: 106.719028,
    },
};

const Footer = () => {
    const mapCoordinates = `${CONTACT.location.lat},${CONTACT.location.lng}`;
    const mapsEmbedUrl = `https://www.google.com/maps?q=${mapCoordinates}&z=17&output=embed`;
    const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapCoordinates}`;

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundImage: "url('/images/gedung2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <section>
            <h3 className="mb-4 text-lg font-semibold tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-white/90">
              <li>
                <p className="font-medium text-white">Alamat</p>
                <p>{CONTACT.address}</p>
              </li>
              <li>
                <p className="font-medium text-white">Nomor Handphone</p>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transition hover:text-lime-300"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold tracking-wide">
              Akses Cepat
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-block text-white/90 transition hover:translate-x-1 hover:text-lime-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold tracking-wide">
              Lokasi Kami
            </h3>

            <div className="overflow-hidden rounded-xl border border-white/30 bg-black/30">
              <div className="aspect-video w-full">
                <iframe
                  title="Lokasi Pola Resik Optima"
                  src={mapsEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <a
              href={mapsOpenUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-medium text-lime-300 transition hover:text-lime-200"
            >
              Buka di Google Maps
            </a>
          </section>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/75">
          © {new Date().getFullYear()} Pola Resik Optima. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;