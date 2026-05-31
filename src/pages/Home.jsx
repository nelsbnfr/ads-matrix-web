import { useState } from "react";
import {
  BlurredGrid,
  Grid,
  PerspectiveGrid,
  ReverseGrid,
  Box,
  ContainerGrid,
} from "../components/Grid";
import adsMatrixContent from "../data/content";
import { animate, motion } from "framer-motion";
import StaggerText from "../components/StaggerText";
import Button from "../components/Button";

export default function Home() {
  // GENERAL
  const [slide, setSlide] = useState(0);
  const data = adsMatrixContent;

  // MAPS
  const clients = data.escapingClients.clients.map((client) => (
    <BlurredGrid key={client.id}>
      <div className="flex flex-col justify-start items-center gap-8 py-12">
        {client.wide ? (
          <img src={client.img} alt="" className="width-60 object-contain" />
        ) : (
          <img src={client.img} alt="" className="size-40 object-contain" />
        )}
        <h1 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
          {client.title}
        </h1>
        <span className="font-vga-text text-white text-xs">{client.text}</span>
      </div>
    </BlurredGrid>
  ));

  const team = data.team.members.map((member) => (
    <ContainerGrid key={member.id}>
      <div className="flex flex-col justify-start items-center gap-2 py-2">
        <img
          src={member.img}
          alt=""
          className="size-80 object-cover border-2 border-primary"
        />
        <h1 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
          {member.title}
        </h1>
        <span className="font-vga-text text-white text-xs">{member.text}</span>
      </div>
    </ContainerGrid>
  ));

  const listItem = data.topOnePercent.steps.map((item) => (
    <div
      key={item.number}
      className="flex flex-col gap-2 font-vga-text text-[12px] mb-4"
    >
      <div>
        <span className="text-primary">[{item.number}]</span>
      </div>
      <div>
        <span className="text-white">{item.text}</span>
      </div>
    </div>
  ));
  return (
    <>
      <main className="flex flex-col items-center overflow-hidden gap-40">
        {/* =============== LOGO =============== */}
        {/*  <img src="/Logo.png" alt="" className="size-20 object-contain" /> */}

        <div className="w-full max-w-[1100px]">
          {/* =============== HERO =============== */}
          <Grid>
            <section className="min-h-[50vh] w-full flex flex-col justify-start items-center relative z-40 gap-4 text-center pt-8">
              <img
                src="/Logo.png"
                alt=""
                className="w-[clamp(200px,80%,400px)] max-size-[500px] object-contain"
              />
              <StaggerText
                text={"Escape the\nAds Matrix"}
                speed={80}
                delay={0.4}
                cursorHideDelay={600}
                containerClass="text-white text-6xl max-sm:text-5xl uppercase [text-shadow:0_0_12px_var(--color-primary)] text-center whitespace-pre-line"
              />

              <span className="font-vga-text text-white text-sm">
                Nur <span className="text-primary">1%</span> der Werbekonten{" "}
                <br />
                erhalten <span className="text-primary">99%</span> der
                Ergebnisse
              </span>
              <Button text="Kostenloses Erstgespräch" />
            </section>
          </Grid>
        </div>
        {/* =============== KUNDEN =============== */}
        <div className="overflow-hidden w-full py-16 border-y border-primary">
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
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {clients}
                  {clients}
                </motion.div>
              </div>
              <Button text="Kostenloses Erstgespräch" />
            </section>
          </PerspectiveGrid>
        </div>
        <div className="w-full max-w-[1100px]">
          {/* =============== WAS IST DIE ADS MATRIX =============== */}
          <div className="p-8">
            <Box title="Was ist die Ads Matrix?">
              <div className="flex flex-col p-8 items-center text-center gap-4">
                <img
                  src="/pyramid.png"
                  alt=""
                  className="w-[clamp(320px,80%,400px)] max-size-[500px] object-contain"
                />

                <span className="font-vga-text text-white text-sm">
                  Ein winziger Bruchteil der hochprofessionellen,
                  datengetriebenen Accounts teilt den globalen Werbeerfolg fast
                  komplett unter sich auf. Die Top 1%.
                </span>
                <Button text="Kostenloses Erstgespräch" />
              </div>
            </Box>
          </div>
        </div>
        {/* =============== ABOUT =============== */}
        <div className="overflow-hidden w-full py-16 border-y border-primary">
          <PerspectiveGrid>
            <section className="min-h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
              <h2 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
                Behind the Matrix
              </h2>

              <div className="overflow-hidden w-full">
                <div className="flex flex-col lg:flex-row  gap-4 w-full items-center justify-center">
                  {team}
                </div>
              </div>
              <Button text="Kostenloses Erstgespräch" />
            </section>
          </PerspectiveGrid>
        </div>
        <div className="w-full max-w-[1100px]">
          {/* =============== SO GEHTS =============== */}
          <div className="p-8">
            <Box title="So bringen wir dich in die Top 1%">
              <div className="flex flex-col p-8 items-center gap-4">
                <div>{listItem}</div>
                <Button text="Kostenloses Erstgespräch" />
              </div>
            </Box>
          </div>

          {/* =============== CTA =============== */}
          <ReverseGrid>
            <section className="min-h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
              <h2 className="text-white text-6xl max-sm:text-5xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
                Kostenloser
                <br />
                Ads Workshop
              </h2>
              <span className="font-vga-text text-white text-sm">
                Statt einen Risikoreichen Vertrag zu unterschreiben kannst du
                unseren service kostenfrei nutzen.
              </span>
              <Button text="Kostenloses Erstgespräch" />
            </section>
          </ReverseGrid>
        </div>
      </main>
      {/* =============== SITE OVERLAYS =============== */}
      <div className="crt-overlay" />
      <div className="noise-overlay" />
      <svg className="svg-filters" aria-hidden="true">
        <filter id="card-wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.08"
            numOctaves="2"
            seed="2"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="3s"
              values="0.015 0.08; 0.025 0.12; 0.015 0.08"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              dur="2.5s"
              values="1; 4; 6; 1; 2"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </svg>
    </>
  );
}
