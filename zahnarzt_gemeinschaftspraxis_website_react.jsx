export default function ZahnarztWebsite() {
  const navItems = [
    "Startseite",
    "Leistungen",
    "Über Uns",
    "Kontakt",
  ];

  const leistungen = [
    "Allgemeine und chirurgische Zahnheilkunde",
    "Professionelle Zahnreinigung",
    "Parodontosebehandlung",
    "Kunststofffüllungen",
    "Prothesenreinigung",
  ];

  const bilder = {
    team: "/Praxisteam.jpeg",
    wartezimmer: "/Wartezimmer.jpeg",
    praxis: "/praxisbild.jpeg",
    krauss: "/krauss.jpeg",
    saleh: "/saleh.jpeg",
    techniker: "/techniker.jpeg",
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-700">
              Kraus-Saleh-zahnarzt.de
            </h1>
            <p className="text-sm text-slate-500">
              Gemeinschaftspraxis Zahnmedizin
            </p>
          </div>

          <nav>
            <ul className="hidden lg:flex gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-cyan-700 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="pt-36 pb-24 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="uppercase tracking-[4px] text-cyan-700 text-sm font-semibold">
              Willkommen
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-5 mb-8">
              Moderne Zahnmedizin
              <br />
              mit persönlicher Betreuung
            </h1>

            <p className="text-lg text-slate-600 leading-8 mb-8 max-w-2xl">
              Gemeinschaftspraxis Dr. med. dent. Hans‑Peter Krauß
              und Osama Saleh in Kaiserslautern.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#termin-buchen"
                className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg"
              >
                Termin buchen
              </a>

              <a
                href="#kontakt"
                className="bg-white border border-slate-300 hover:bg-slate-100 transition px-8 py-4 rounded-full font-semibold shadow-sm"
              >
                Kontakt
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={bilder.team}
              alt="Praxisteam"
              className="rounded-[35px] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-cyan-700 text-sm font-semibold">
              Unsere Praxis
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Moderne & angenehme Atmosphäre
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-[35px] p-4 shadow-lg border">
              <img
                src={bilder.wartezimmer}
                alt="Wartezimmer"
                className="rounded-[24px] h-[320px] w-full object-cover"
              />
            </div>

            <div className="bg-slate-50 rounded-[35px] p-4 shadow-lg border">
              <img
                src={bilder.praxis}
                alt="Praxis"
                className="rounded-[24px] h-[320px] w-full object-cover"
              />
            </div>

            <div className="bg-slate-50 rounded-[35px] p-4 shadow-lg border">
              <img
                src={bilder.team}
                alt="Praxisteam"
                className="rounded-[24px] h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-cyan-700 text-sm font-semibold">
              Leistungen
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Unsere Leistungen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((leistung) => (
              <div
                key={leistung}
                className="bg-white rounded-3xl p-8 shadow-lg border text-center text-lg font-medium hover:-translate-y-1 transition"
              >
                {leistung}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="über-uns" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[4px] text-cyan-700 text-sm font-semibold">
              Über Uns
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Kompetenz & Vertrauen
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Wir verbinden moderne Zahnmedizin mit persönlicher Betreuung und langjähriger Erfahrung.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {leistungen.map((leistung) => (
                <div
                  key={leistung}
                  className="bg-white rounded-2xl p-5 shadow-sm border text-sm font-medium"
                >
                  {leistung}
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={bilder.team}
              alt="Praxisteam"
              className="rounded-[35px] shadow-2xl h-[500px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-cyan-700 text-sm font-semibold">
              Unsere Zahnärzte
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Das Ärzteteam
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-slate-50 rounded-[35px] p-8 shadow-lg border">
              <img
                src={bilder.krauss}
                alt="Hans Peter Krauß"
                className="rounded-[24px] h-[320px] w-full object-cover"
              />

              <h3 className="text-3xl font-bold mt-8 mb-3">
                Dr. med. dent. Hans‑Peter Krauß
              </h3>

              <div className="flex flex-wrap gap-3">
                {['Zahnersatz', 'Endodontie', 'Prophylaxe'].map((item) => (
                  <span
                    key={item}
                    className="bg-white border rounded-full px-5 py-2 text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-[35px] p-8 shadow-lg border">
              <img
                src={bilder.saleh}
                alt="Osama Saleh"
                className="rounded-[24px] h-[320px] w-full object-cover"
              />

              <h3 className="text-3xl font-bold mt-8 mb-3">
                Osama Saleh
              </h3>

              <div className="flex flex-wrap gap-3">
                {['Implantologie', 'Zahnersatz', 'Endodontie'].map((item) => (
                  <span
                    key={item}
                    className="bg-white border rounded-full px-5 py-2 text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[35px] p-8 shadow-lg border">
            <img
              src={bilder.team}
              alt="Team"
              className="rounded-[24px] h-[320px] w-full object-cover"
            />

            <h3 className="text-2xl font-bold mt-6 mb-3">
              Freundliches Team
            </h3>
          </div>

          <div className="bg-white rounded-[35px] p-8 shadow-lg border">
            <img
              src={bilder.techniker}
              alt="Zahntechniker"
              className="rounded-[24px] h-[320px] w-full object-cover"
            />

            <h3 className="text-2xl font-bold mt-6 mb-3">
              Praxislabor
            </h3>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-10">
              Kontakt & Anfahrt
            </h2>

            <div className="space-y-8 text-lg">
              <div>
                <h3 className="font-bold text-2xl mb-2">Adresse</h3>
                <p className="text-slate-600">
                  Medicusstr. 34
                  <br />
                  67655 Kaiserslautern
                </p>
              </div>

              <div>
                <h3 className="font-bold text-2xl mb-2">Telefon</h3>
                <p className="text-slate-600">0631 / 28575</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={bilder.praxis}
              alt="Praxis"
              className="rounded-[35px] shadow-2xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
