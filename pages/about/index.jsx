import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaFigma,
  FaInstagram,
  FaBehance,
  FaAdobe,
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// About data (REALISTIC & CLEAN)
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Brand Design",
        icons: [FaAdobe, SiAdobephotoshop],
      },
      {
        title: "UI / UX Design",
        icons: [FaFigma, SiAdobexd],
      },
      {
        title: "Social Media Creatives",
        icons: [FaInstagram, FaBehance],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Brand Designer & Social Media Creative",
        stage: "2021 – Present",
      },
      {
        title: "Freelance Designer",
        stage: "2020 – 2021",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelor’s Degree – Engineering Background",
        stage: "India",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2"
          >
            Designing brands that{" "}
            <span className="text-accent">connect & convert</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m Ashik Latheef, a brand designer based in Dubai. I help businesses
            create strong visual identities and engaging social media creatives
            that stand out in competitive markets.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px]">
                  Years experience
                </div>
              </div>

              <div className="flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px]">
                  Projects delivered
                </div>
              </div>

              <div className="flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px]">
                  Happy clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row gap-x-2 items-center text-white/60"
              >
                <div className="font-light">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
