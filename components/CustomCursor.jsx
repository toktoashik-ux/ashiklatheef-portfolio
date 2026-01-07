import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: hovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
