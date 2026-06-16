"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const steps = [
  {
    step: 1,
    title: "Join the World",
    description: "Enter Pixl and create your character in a retro 2D open world",
    video: "/step-1.mp4",
  },
  {
    step: 2,
    title: "Explore Regions",
    description: "Discover cyberpunk cities, underwater zones & more",
    video: "/step-2.mp4",
  },
  {
    step: 3,
    title: "Accept Sidequests",
    description: "Build apps, websites & hardware for in-game characters",
    video: "/step-3.mp4",
  },
  {
    step: 4,
    title: "Sell your Projects",
    description: "Submit your creations to merchants in your village",
    video: "/step-4.mp4",
  },
  {
    step: 5,
    title: "Earn Pixels",
    description: "Collect the in-game currency and level up your character",
    video: "/step-5.mp4",
  },
  {
    step: 6,
    title: "Unlock Funding",
    description: "Convert pixels into real-world rewards & funding",
    video: "/step-6.mp4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function VideoCard({ s }: { s: typeof steps[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const comingSoon = s.step >= 3;

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch && !comingSoon) videoRef.current?.play();
  }, [comingSoon]);

  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col gap-2 text-left"
      onPointerEnter={(e) => { if (!comingSoon && e.pointerType === "mouse") videoRef.current?.play(); }}
      onPointerLeave={(e) => { if (!comingSoon && e.pointerType === "mouse") videoRef.current?.pause(); }}
    >
      <div className="relative border-2 border-black aspect-square overflow-hidden bg-black shadow-[4px_4px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:-translate-x-2 transition-all">
        <span
          className="absolute top-2 left-2 z-10 text-xs px-2 py-0.5 border border-black font-pixel"
          style={{ background: "#ec3750", color: "#F5EED2" }}
        >
          {String(s.step).padStart(2, "0")}
        </span>
        <video
          ref={videoRef}
          src={s.video}
          preload="auto"
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        />
        {comingSoon && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/70 backdrop-blur-sm">
            <p className="font-pixel text-[#ec3750] text-4xl">Pixl</p>
            <p className="font-pixel text-[#F5EED2] text-lg tracking-wide">Coming Soon</p>
          </div>
        )}
      </div>
      <p className="text-xl font-pixel leading-tight">{s.title}</p>
      <p className="text-base text-black/60 leading-snug">{s.description}</p>
    </motion.div>
  );
}

export function WTFISTHIS() {
  return (
    <section
      className="my-20 px-4 md:px-8 text-center flex flex-col items-center gap-10"
      id="what"
    >
      <motion.h2
        className="text-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        What is Pixl?
      </motion.h2>

      <motion.p
        className="max-w-2xl text-[18px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        A pixel-themed YSWS where you build real projects to level up your
        character and unlock real-world funding.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-15 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {steps.map((s) => (
          <VideoCard key={s.step} s={s} />
        ))}
      </motion.div>
    </section>
  );
}

