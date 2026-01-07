import { motion } from "framer-motion";
import { RxCrop, RxPencil2, RxDesktop } from "react-icons/rx";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

/* =========================
   SERVICES DATA (IMPORTANT)
   ========================= */
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Building strong brand identities with clear positioning, visual systems, and consistency.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Designing clean, modern visuals for social media, marketing, and digital products.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Creating responsive, high-performance websites using modern frontend technologies.",
  },
];

/* =========================
   SERVICES PAGE
   ========================= */
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">

          {/* LEFT TEXT */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/70"
            >
              I help brands grow through thoughtful design, strong visual identity,
              and impactful digital experiences.
            </motion.p>
          </div>

          {/* RIGHT SLIDER */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>

        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
