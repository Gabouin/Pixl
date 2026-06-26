"use client";

import { motion } from "framer-motion";

const sidequestRewards = [
  {
    name: "Domain + Sticker Pack",
    sidequest: "Build a merchant's storefront",
    image: "/shop/domain.png",
  },
  {
    name: "Apple Developer Account",
    sidequest: "Ship a mobile app for the Traveler",
    image: "/shop/apple-dev.png",
  },
  {
    name: "Flipper Zero",
    sidequest: "Secure the Cyberpunk City network",
    image: "/shop/flipper.png",
  },
  {
    name: "Graphics Tablet",
    sidequest: "Design your own region",
    image: "/shop/tablet.png",
  },
  {
    name: "Sticker Pack + Poster",
    sidequest: "Draw sprites for the Item Shop",
    image: "/shop/stickers.png",
  },
  {
    name: "Full PCB Manufacturing Run",
    sidequest: "Build a robot arm for the Factory",
    image: "/shop/pcb.png",
  },
  {
    name: "2000 Robux",
    sidequest: "Make me a Roblox game!!",
    image: "/shop/robux.png",
  },
];

const generalItems = [
  {
    name: "Hack Club Sticker Pack",
    price: 100,
    hours: 2,
    image: "/shop/hc-stickers.png",
  },
  {
    name: "API Credits ($20)",
    price: 200,
    hours: 4,
    image: "/shop/api.png",
  },
  {
    name: "Raspberry Pi 5",
    price: 800,
    hours: 16,
    image: "/shop/rpi.png",
  },
  {
    name: "Arduino Starter Kit",
    price: 650,
    hours: 13,
    image: "/shop/arduino.png",
  },
  {
    name: "GitHub Pro (1 year)",
    price: 500,
    hours: 10,
    image: "/shop/github.png",
  },
  {
    name: "Mechanical Keyboard",
    price: 1000,
    hours: 20,
    image: "/shop/keyboard.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function ShopCard({ item }: { item: { name: string; image: string; price?: number; hours?: number; sidequest?: string } }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col border-2 border-black bg-[#fffaf7] hover:-translate-y-1 hover:-translate-x-1 transition-all cursor-pointer"
      style={{ boxShadow: "4px 4px 0px #000" }}
      whileHover={{ boxShadow: "8px 8px 0px #000" } as any}
    >
      <div className="aspect-square bg-black/70 border-b-2 border-black flex flex-col items-center justify-center gap-2">
        <p className="font-pixel text-[#ec3750] text-2xl">Pixl</p>
        <p className="font-pixel text-[#F5EED2] text-xs tracking-wide">Coming Soon</p>
      </div>
      <div className="px-3 py-3 flex flex-col gap-1">
        <p className="font-pixel text-sm leading-snug">{item.name}</p>
        {item.sidequest && (
          <p className="text-[10px] font-sans text-black/50 leading-snug">{item.sidequest}</p>
        )}
        {item.price && (
          <div className="flex items-baseline gap-2">
            <p className="font-pixel text-[#ff8c37] text-lg">{item.price}px</p>
            <p className="text-[10px] font-sans text-black/40">~{item.hours}h</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Shop() {
  return (
    <section className="my-10 md:my-20 px-4 md:px-8 flex flex-col items-center gap-16" id="shop">
      <div className="text-center">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2 font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Spend your pixels
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          The Shop
        </motion.h2>
        <motion.p
          className="mt-3 text-black/60 text-base md:text-lg max-w-xl mx-auto font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Earn pixels by completing sidequests and spend them on real rewards.
        </motion.p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-pixel text-xl">Sidequest Rewards</span>
            <span className="text-[10px] font-sans font-bold bg-[#ec3750] text-white px-2 py-0.5">
              Sidequest only
            </span>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sidequestRewards.map((item) => (
              <ShopCard key={item.name} item={item} />
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-pixel text-xl">General Shop</span>
            <span className="text-[10px] font-sans font-bold bg-[#ff8c37] text-white px-2 py-0.5">
              Pixels only
            </span>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {generalItems.map((item) => (
              <ShopCard key={item.name} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
