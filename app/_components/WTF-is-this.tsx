"use client";

import { motion } from "framer-motion";

export function WTFISTHIS() {
  return (
    <section
      className="my-30 mx-20 text-center flex flex-col items-center gap-2"
      id="what"
    >
      <motion.p
        className="text-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        What is Pixl?
      </motion.p>
      <motion.p
        className="max-w-3xl text-[20px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        Pixl is a pixel-themed world where you level up by building real
        projects. Explore villages, cyberpunk cities, and underwater regions
        while taking on sidequests like making apps, websites, or hardware for
        in-game characters. Earn coins, unlock funding, and move to bigger
        places with better opportunities. It’s basically a YSWS disguised as an
        open-world game.
      </motion.p>
    </section>
  );
}
