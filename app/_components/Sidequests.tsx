"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    level: "Beginner",
    color: "#4ade80",
    hours: "~8h of work",
    quest: {
      title: "Build a merchant's storefront",
      description:
        "Zara the cloth merchant needs a simple website to showcase her wares. Build her a clean landing page with item listings and a contact form.",
      tags: ["HTML/CSS", "Web"],
    },
    prize: {
      title: "Domain + Sticker Pack",
      description:
        "A custom domain of your choice (.com, .dev, .xyz…) + a Hack Club sticker pack shipped to your door.",
    },
  },
  {
    level: "Intermediate",
    color: "#ff8c37",
    hours: "~25h of work",
    quest: {
      title: "Ship a mobile app for the Traveler",
      description:
        "Marco the traveling merchant needs a mobile app to track his routes, log his inventory on the go, and send notifications when he arrives at a new region.",
      tags: ["React Native", "Mobile"],
    },
    prize: {
      title: "Apple Developer Account",
      description:
        "A 1-year Apple Developer Program membership ($99). Publish your app on the App Store under your own name.",
    },
  },
  {
    level: "Expert",
    color: "#ec3750",
    hours: "~45h of work",
    quest: {
      title: "Secure the Cyberpunk City network",
      description:
        "GHOST, a rogue hacker NPC, needs a network intrusion detection system that monitors traffic, flags anomalies, and sends real-time alerts to a dashboard.",
      tags: ["Networking", "Security", "Backend"],
    },
    prize: {
      title: "Flipper Zero",
      description:
        "A Flipper Zero shipped to you. The multi-tool for hardware hackers. Sub-GHz, NFC, infrared, GPIO and more.",
    },
  },
  {
    level: "Intermediate",
    color: "#ff8c37",
    hours: "~20h of work",
    quest: {
      title: "Design your own region",
      description:
        "Create a brand new region for the Pixl world. Design the map, the NPCs, the assets and the sidequests that come with it. If it's polished enough, your region gets added to the real game for everyone to explore.",
      tags: ["Pixel Art", "Design", "Game Dev"],
    },
    prize: {
      title: "Graphics Tablet",
      description:
        "A graphics tablet to keep drawing regions, character sprites and UI assets, whether your region ships or not.",
    },
  },
  {
    level: "Beginner",
    color: "#4ade80",
    hours: "~6h of work",
    quest: {
      title: "Draw sprites for the Item Shop",
      description:
        "Loot, the item shop NPC, needs a pack of pixel art icons for his inventory: potions, weapons, tools and collectibles. The best ones get added to the real game.",
      tags: ["Pixel Art", "Design"],
    },
    prize: {
      title: "Sticker Pack + Poster",
      description:
        "A Hack Club sticker pack and a printed poster of your sprite sheet shipped to you.",
    },
  },
  {
    level: "Expert",
    color: "#ec3750",
    hours: "~80h of work",
    quest: {
      title: "Build a robot arm for the Factory",
      description:
        "ARIA, the automation NPC at the Industrial District, needs a working 3-axis robot arm controlled via a custom web interface, with live position feedback and programmable sequences.",
      tags: ["Robotics", "Firmware", "Hardware", "Web"],
    },
    prize: {
      title: "Full PCB Manufacturing Run",
      description:
        "Budget for a full PCB manufacturing run. Boards, components and shipping covered. Build the real thing.",
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function SidequestCard({ l }: { l: (typeof levels)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col border-2 border-black bg-[#fffaf7] w-80 shrink-0 group relative overflow-hidden cursor-pointer"
      style={{ boxShadow: `6px 6px 0px ${l.color}` }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b-2 border-black">
        <span
          className="font-pixel text-sm px-3 py-1 border-2 border-black"
          style={{ background: l.color, color: "#fff" }}
        >
          {l.level}
        </span>
        <p className="text-black/40 text-xs font-sans">{l.hours}</p>
      </div>

      <div className="px-5 py-5 flex flex-col gap-2 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 font-sans">Sidequest</p>
        <p className="font-pixel text-lg leading-snug">{l.quest.title}</p>
        <p className="text-black/60 text-sm leading-relaxed font-sans">{l.quest.description}</p>
        <div className="flex gap-2 flex-wrap mt-1">
          {l.quest.tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-black/30 px-2 py-0.5 text-black/50 font-sans">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-[#fffaf7] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center px-5 py-5 gap-3 group-hover:translate-y-0 ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 font-sans">Prize</p>
        <p className="font-pixel text-2xl leading-snug">{l.prize.title}</p>
        <p className="text-black/60 text-sm leading-relaxed font-sans">{l.prize.description}</p>
      </div>
    </div>
  );
}

function Marquee({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    x.set(-halfWidth);
    animRef.current = animate(x, [- halfWidth, 0], {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => animRef.current?.stop();
  }, [x]);

  return (
    <div
      className="w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      onMouseEnter={() => animRef.current?.pause()}
      onMouseLeave={() => animRef.current?.play()}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-5"
        style={{ x, width: "max-content" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Sidequests() {
  return (
    <section className="my-10 md:my-20 px-4 md:px-8 flex flex-col items-center gap-16" id="sidequests">
      <div className="text-center">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Examples
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Sidequests and Rewards
        </motion.h2>
        <motion.p
          className="mt-3 text-black/60 text-base md:text-lg max-w-xl mx-auto font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          NPCs give you projects matched to your level.
          <br></br>
          The following sidequests are only given as example and{"\u00A0"}might{"\u00A0"}change{"\u00A0"}over the weeks.
        </motion.p>
      </div>

      <Marquee>
        {[...levels, ...levels].map((l, i) => (
          <SidequestCard key={i} l={l} />
        ))}
      </Marquee>

      <motion.div
        className="max-w-2xl w-full border-2 border-black bg-[#fffaf7] px-6 py-5 text-center font-sans"
        style={{ boxShadow: "4px 4px 0px #000" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-pixel text-lg mb-2">Prizes are flexible</p>
        <p className="text-black/60 text-sm leading-relaxed">
          Don't want the listed prize or already have it? No problem, swap it for anything of equivalent value. We also have a <span className="text-[#ec3750] font-bold">general shop</span> with hardware grants, API credits, dev tools and more so you can pick what actually matters to you.
        </p>
      </motion.div>
    </section>
  );
}
