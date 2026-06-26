"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidequests } from "./Sidequests";
import { Shop } from "./Shop";

export function MainContent() {
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  function handleRevealShop() {
    setShopOpen((prev) => {
      if (!prev) {
        setTimeout(() => {
          shopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      return !prev;
    });
  }

  return (
    <>
      <Sidequests onRevealShop={handleRevealShop} />
      <AnimatePresence>
        {shopOpen && (
          <motion.div
            ref={shopRef}
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto", overflow: "visible" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Shop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
