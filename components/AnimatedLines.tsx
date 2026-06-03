"use client";
import { motion } from "framer-motion";

interface Props {
  variant?: "dark" | "pink";
}

export default function AnimatedLines({ variant = "dark" }: Props) {
  const isPink = variant === "pink";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">

      {/* Orb 1 — grande, rosa cipria */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: isPink
            ? "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(212,104,154,0.28) 0%, transparent 65%)",
          filter: "blur(60px)",
          top: "-15%",
          left: "-10%",
        }}
        animate={{ x: [0, 80, 20, 0], y: [0, 60, 120, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — medio, bianco/cipria */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: isPink
            ? "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(253,217,236,0.22) 0%, transparent 65%)",
          filter: "blur(50px)",
          top: "40%",
          right: "-5%",
        }}
        animate={{ x: [0, -60, -100, 0], y: [0, -80, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Orb 3 — piccolo, accento */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          background: isPink
            ? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(188,82,133,0.2) 0%, transparent 65%)",
          filter: "blur(45px)",
          bottom: "5%",
          left: "35%",
        }}
        animate={{ x: [0, 50, -30, 0], y: [0, -50, -80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      {/* Shimmer */}
      <motion.div
        className="absolute"
        style={{
          width: "40%",
          height: "150%",
          top: "-25%",
          background: isPink
            ? "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)"
            : "linear-gradient(105deg, transparent 40%, rgba(253,217,236,0.05) 50%, transparent 60%)",
          filter: "blur(8px)",
        }}
        animate={{ x: ["-60%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2, repeatDelay: 6 }}
      />

    </div>
  );
}
