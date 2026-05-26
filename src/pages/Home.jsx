import { BlurredGrid, Grid, PerspectiveGrid } from "../components/Gitter";
import adsMatrixContent from "../data/content";

export default function Home() {
  const data = adsMatrixContent;

  const clients = data.escapingClients.clients.map((client) => (
    <BlurredGrid>
      <div className="flex flex-col justify-start items-center gap-8 py-20">
        <img src="/ym_logo.png" alt="" className="size-40 object-contain" />
        <h1 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
          Your Music
        </h1>
        <span className="font-vga-text text-white text-xs">
          Nur <span className="text-primary">1%</span> der Werbekonten <br />
          erhalten <span className="text-primary">99%</span> der Ergebnisse
        </span>
      </div>
    </BlurredGrid>
  ));
  console.log(data);
  return (
    <main className="flex flex-col items-center gap-16">
      <img src="/Logo.png" alt="" className="size-20 object-contain" />
      <Grid>
        <section className="h-[50vh] w-full flex flex-col justify-center items-center relative z-20 gap-4 text-center">
          <h1 className="text-white text-6xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            Escape the <br /> Ads Matrix
          </h1>
          <span className="font-vga-text text-white text-sm">
            Nur <span className="text-primary">1%</span> der Werbekonten <br />
            erhalten <span className="text-primary">99%</span> der Ergebnisse
          </span>
          <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
            Kostenloses Erstgespräch
          </button>
        </section>
      </Grid>
      <section className="w-full flex flex-col justify-start items-center relative z-20 gap-4 text-center">
        <h2 className="text-white text-4xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
          Was ist die <br /> Ads Matrix?
        </h2>
        <img src="/pyramid.png" alt="" className="size-[80%] object-contain" />

        <span className="font-vga-text text-white text-sm">
          NEin winziger Bruchteil der hochprofessionellen, datengetriebenen
          Accounts teilt den globalen Werbeerfolg fast komplett unter sich auf.
          Die Top 1%.
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

            <div className="flex w-[80vw] gap-4">{clients}</div>

            <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
              Kostenloses Erstgespräch
            </button>
          </section>
        </PerspectiveGrid>
      </div>
    </main>
  );
}
