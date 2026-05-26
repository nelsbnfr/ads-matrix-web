import { useState } from "react";
import {
  BlurredGrid,
  Grid,
  PerspectiveGrid,
  ReverseGrid,
} from "../components/Grid";
import adsMatrixContent from "../data/content";
import { animate, motion } from "framer-motion";

export default function Home() {
  // GENERAL
  const [slide, setSlide] = useState(0);
  const data = adsMatrixContent;

  // ANIMATIONS
  const gap = 16;
  const slideValue = slide + gap + "%";
  const container = {
    initial: { x: 0 },
    animate: { x: slideValue },
  };
  // MAPS
  const clients = data.escapingClients.clients.map((client) => (
    <BlurredGrid>
      <div className="flex flex-col justify-start items-center gap-8 py-20">
        <img src="/ym_logo.png" alt="" className="size-40 object-contain" />
        <h1 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
          {client}
        </h1>
        <span className="font-vga-text text-white text-xs">
          Nur <span className="text-primary">1%</span> der Werbekonten <br />
          erhalten <span className="text-primary">99%</span> der Ergebnisse
        </span>
      </div>
    </BlurredGrid>
  ));

  const listItem = data.topOnePercent.steps.map((item) => (
    <div key={item.number} className="flex gap-2 font-vga-text text-xs mb-4">
      <div>
        <span className="text-primary">&gt;</span>
      </div>
      <div>
        <span className="text-white">{item.text}</span>
      </div>
    </div>
  ));
  console.log(data);
  return (
    <>
      <main className="flex flex-col items-center gap-16 overflow-hidden">
        <img src="/Logo.png" alt="" className="size-20 object-contain" />
        <Grid>
          <section className="h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
            <h1 className="text-white text-6xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
              Escape the <br /> Ads Matrix
            </h1>
            <span className="font-vga-text text-white text-sm">
              Nur <span className="text-primary">1%</span> der Werbekonten{" "}
              <br />
              erhalten <span className="text-primary">99%</span> der Ergebnisse
            </span>
            <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
              Kostenloses Erstgespräch
            </button>
          </section>
        </Grid>
        <section className="w-full flex flex-col justify-start items-center relative z-20 gap-4 text-center px-8">
          <h2 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            Was ist die <br /> Ads Matrix?
          </h2>
          <img
            src="/pyramid.png"
            alt=""
            className="size-[80%] object-contain"
          />

          <span className="font-vga-text text-white text-sm">
            Ein winziger Bruchteil der hochprofessionellen, datengetriebenen
            Accounts teilt den globalen Werbeerfolg fast komplett unter sich
            auf. Die Top 1%.
          </span>
          <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
            Kostenloses Erstgespräch
          </button>
        </section>
        <div className="overflow-hidden w-full py-16">
          <PerspectiveGrid>
            <section className="min-h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
              <h1 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
                CURRENTLY ESCAPING <br /> THE MATRIX
              </h1>

              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {clients}
                  {clients}
                </motion.div>
              </div>
              <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
                Kostenloses Erstgespräch
              </button>
            </section>
          </PerspectiveGrid>
        </div>
        <section className="w-full flex flex-col justify-start items-start p-8 relative z-20 gap-4 text-left">
          <h2 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            So bringen <br /> wir Werbekonten <br /> in die Top 1%
          </h2>
          <div>{listItem}</div>
          <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
            Kostenloses Erstgespräch
          </button>
        </section>
        <ReverseGrid>
          <section className="h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
            <h1 className="text-white text-6xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
              Kostenlos
              <br />7 Tage starten
            </h1>
            <span className="font-vga-text text-white text-sm">
              Statt einen Risikoreichen Vertrag zu unterschreiben kannst du
              unseren service kostenfrei nutzen.
            </span>
            <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
              Kostenloses Erstgespräch
            </button>
          </section>
        </ReverseGrid>
      </main>

      <div className="crt-overlay" />
      <div className="noise-overlay" />
    </>
  );
}
