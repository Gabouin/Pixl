"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [email, setEmail] = useState("");
  const [shake, setShake] = useState(false);
  const [msg, setMsg] = useState("");
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleRSVP() {
    if (!email) {
      triggerError("yo, drop your email first 👀");
      return;
    }
    if (!isValid) {
      triggerError("that doesn't look like a real email lol");
      return;
    }

    await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    window.open(`https://rsvp.soon.it/pixl`, "_blank");
  }

  function triggerError(message: string) {
    setMsg(message);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div className="relative h-screen">
      <img
        src="/hero-bg2.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="relative z-10 flex h-screen w-full items-center justify-center flex-col">
        <div className="flex flex-col items-center px-4">
          <motion.p
            className="font-pixel text-black text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] select-none leading-none"
            initial={{ opacity: 0, y: -80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Pixl
          </motion.p>
          <motion.div
            className="flex flex-col w-full"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            <motion.div
              className="flex w-full"
              animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleRSVP()}
                className="w-full px-5 py-2 text-base sm:text-xl md:text-2xl focus:outline-0 bg-[#ec3750] text-white transition-all placeholder:text-white/60"
                placeholder="Enter your email to continue...."
              />
              <motion.button
                onClick={handleRSVP}
                className="text-center w-[30%] px-5 py-2 text-base sm:text-xl md:text-2xl hover:shadow-2xl shadow-[#ff8c37] bg-[#ec3750] cursor-pointer text-white hover:-translate-y-1 hover:-translate-x-1 border-black border-r-8 border-t-2 border-l-2 hover:border-b-12 border-b-8 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                RSVP
              </motion.button>
            </motion.div>
            <AnimatePresence>
              {msg && (
                <motion.p
                  className="text-black text-sm mt-2 pl-1"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
