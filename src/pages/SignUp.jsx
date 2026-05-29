import { useState } from "react";
import Button from "../components/Button";
import { Box } from "../components/Grid";
import { motion } from "framer-motion";

export default function SignUp() {
  const [submitting, setSubmitting] = useState(false);
  const [send, setSend] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (submitting) return;
    setSubmitting(true);

    try {
      const form = new FormData(e.currentTarget);

      const payload = {
        name: form.get("name"),
        website: form.get("website"),
        email: form.get("email"),
        phone: form.get("phone"),
        budget: form.get("budget"),
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        return;
      }

      console.log("Lead sent:", result);
      setSend(true);
    } finally {
      setSubmitting(false);
    }
  }

  function loadingBar() {
    return (
      <>
        <div className="w-full h-10 border-b-dark border-r-dark border-t-light border-l-light border-2 flex items-start">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ type: "tween", duration: 3 }}
            className="text-white bg-primary h-full"
          ></motion.div>
        </div>
        <div className="overflow-hidden relative h-10">
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.1, delay: 3 }}
            className="absolute inset-0 flex items-center"
          >
            <div>
              <span className="text-white text-lg">Initializing</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 0 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 0.5 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0, delay: 1 }}
                className="text-white text-lg"
              >
                .
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ type: "tween", duration: 0.1, delay: 3 }}
            className="absolute inset-0 flex items-center"
          >
            <span className="text-white text-lg">
              Done, we will contact you!
            </span>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <main className="min-h-screen w-full p-4 flex justify-center items-center">
      {" "}
      <Box title="Wie erreichen wir dich?">
        {send ? null : (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="px-4 py-6 flex flex-col gap-2"
          >
            <input
              type="text"
              className="w-full bg-primary p-4 text-lg outline-white"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="email"
              className="w-full bg-primary p-4 text-lg outline-white"
              placeholder="E-Mail"
              name="email"
              required
            />
            <input
              type="tel"
              className="w-full bg-primary p-4 text-lg outline-white"
              placeholder="Telefon"
              name="phone"
              required
            />
            <input
              type="text"
              className="w-full bg-primary p-4 text-lg outline-white"
              placeholder="Deine Website"
              name="website"
              required
            />
            <div className="mt-2 mb-4">
              <label htmlFor="budget" className="text-white text-lg">
                Wie viel Werbebudget gibst du pro Monat aus?
              </label>

              <select
                name="budget"
                className="w-full bg-primary p-4 text-lg outline-none"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Auswählen
                </option>
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
            <button
              type="submit"
              className="w-full bg-white p-4 text-lg outline-none cursor-none"
            >
              Abschicken
            </button>
          </form>
        )}
        <div className="flex-1 px-4 flex flex-col justify-center">
          {send ? loadingBar() : null}
        </div>
      </Box>
    </main>
  );
}
