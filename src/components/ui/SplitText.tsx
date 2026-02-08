"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

type SplitTextProps = {
  children: string;
  className?: string;
  delay?: number;
};

export const SplitText = ({ children, className, delay = 0 }: SplitTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = children.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {words.map((word, i) => (
        <motion.div
          key={i}
          style={{ display: "flex", marginRight: "0.25em", whiteSpace: "nowrap" }} // Add spacing between words
        >
          {Array.from(word).map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};
