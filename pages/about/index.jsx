import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaFigma,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// About data (SAFE ICONS ONLY)
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Brand Design",
        icons: [SiAdobephotoshop],
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
        title: "Engineering Background",
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
        {/* Left */}
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
            that stand out.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex mx-auto xl:mx-0 mb-8"
          >
            <div className="flex gap-x-8">
              <div>
                <div className="text-4xl font-extrabold text-accent">
                  <CountUp end={4} />
                </div>
                <div className="text-xs uppercase">Years experience</div>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-accent">
                  <CountUp end={100} />
                </div>
                <div className="text-xs uppercase">Projects</div>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-accent">
                  <CountUp end={50} />
                </div>
                <div className="text-xs uppercase">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-6 mb-6 justify-center xl:justify-start">
            {aboutData.map((item, i) => (
              <div
                key={i}
                className={`cursor-pointer capitalize relative ${
                  index === i && "text-accent"
                }`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div key={i} className="text-white/70 text-center xl:text-left">
                <div className="font-light">{item.title}</div>
                {item.stage && <div className="text-sm">{item.stage}</div>}

                <div className="flex gap-x-4 justify-center xl:justify-start mt-2">
                  {item.icons?.map((Icon, idx) => (
                    <Icon key={idx} className="text-2xl text-white" />
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
