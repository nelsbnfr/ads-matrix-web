import Button from "../components/Button";

export default function SignUp() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload = {
      vorname: form.get("vorname"),
      nachname: form.get("nachname"),
      email: form.get("email"),
      telefon: form.get("telefon"),
      auswahl: form.get("auswahl"),
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(result.error);
      return;
    }

    console.log("Email sent", result);
  }
  return (
    <main className="w-screen h-screen p-4 flex justify-center">
      <section className="border-primary border-2 w-full w-full max-w-[1200px]">
        <div className="bg-primary p-1 flex justify-between px-2">
          <h2 className="text-xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            Wie erreichen wir dich?
          </h2>
          <h2 className="text-xl uppercase [text-shadow:0_0_12px_var(--color-primary)]">
            X
          </h2>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="px-4 py-6 flex flex-col gap-2"
        >
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Vorname"
            name="vorname"
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Nachname"
            name="nachname"
          />
          <input
            type="email"
            className="w-full bg-primary p-4 text-lg"
            placeholder="E-Mail"
            name="email"
          />
          <input
            type="text"
            className="w-full bg-primary p-4 text-lg"
            placeholder="Telefon"
            name="telefon"
          />
          <div className="mt-2 mb-4">
            <label for="cars" className="text-white text-lg">
              Wie viel Werbebudget gibst du pro Monat aus?
            </label>
            <select
              id="auswahl"
              name="auswahl"
              className="w-full bg-primary p-4 text-lg outline-none"
            >
              <option value="Ich schalte aktuell keine ads">
                Ich schalte aktuell keine ads
              </option>
              <option value="Weniger als 2.000 €/Monat">
                Weniger als 2.000 €/Monat
              </option>
              <option value="2.000 € - 10.000 €">2.000 € - 10.000 € </option>
              <option value="Mehr als 10.000 €/Monat">
                Mehr als 10.000 €/Monat
              </option>
            </select>
          </div>
          <button className="w-full bg-white p-4 text-lg outline-none cursor-none">
            Abschicken
          </button>
        </form>
      </section>
    </main>
  );
}
