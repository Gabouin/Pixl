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
        Pixl is a pixel-themed YSWS where you evolve in a retro 2D open world 
        and level up by building real projects. By exploring the map, you will 
        discover different regions such as a cyberpunk city, an underwater 
        region or even a gambling one. Each region will have sidequests like 
        making apps, websites, or hardware for in-game characters that will 
        pay you. You can also make regular software and hardware projects in 
        your main village and sell them to merchants. Earn pixels, the in-game 
        currency to buy nice items in the shop, or unlock funding. The more 
        pixels you get, the best regions you can unlock and the more pixels 
        you will get from the merchants.
      </motion.p>
    </section>
  );
}
