"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

// Partner logo images
const partnerImages = [
  { src: "/hp_icon_130911.svg", alt: "HP Icon" },
  { src: "/sophos_icon_146050.svg", alt: "Sophos Icon" },
  { src: "/supermicro_logo_icon_249480.svg", alt: "Supermicro Icon" },
  { src: "/veeam_logo_icon_249280.svg", alt: "Veeam Icon" },
  { src: "/proxmox_logo_icon_144960.svg", alt: "Proxmox Icon" },
];

function PartnerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % partnerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl w-[100px] h-[100px] mb-6 overflow-hidden bg-white flex items-center justify-center">
      <img
        src={partnerImages[index].src}
        alt={partnerImages[index].alt}
        className="w-full h-full object-contain transition-all duration-500"
      />
    </div>
  );
}

export default function EvoPage() {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Navbar overlays hero */}
      <Navbar />

      {/* HERO SECTION: 55% of viewport height */}
      <section className="relative w-full h-[55vh] flex items-center justify-center">
        {/* Background image and overlay */}
        <div className="absolute inset-0">
          <video
            src="/t1mp4.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: "center" }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo image with reveal animation */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="overflow-hidden mb-6"
            style={{ width: 330, height: 80 }}
          >
            <motion.div
              initial={{ scale: 3.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src="/whiteorangelrg-logo-2.svg"
                alt="NSIS Logo"
                width={330}
                height={80}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </motion.div>

          {/* Infrastructure services label */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              mx-auto
              font-mono
              uppercase
              text-center
              text-[13.6px]
              font-medium
              leading-[16.32px]
              tracking-[1.36px]
              text-[#dad7cd]
              opacity-100
              block
              mb-4
            "
            style={{
              width: "380.801px",
              height: "16.3184px",
              margin: 0,
              boxSizing: "border-box",
              unicodeBidi: "isolate",
              textWrap: "pretty",
              cursor: "default",
            }}
          >
            Infrastructure services
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full min-h-[35vh] bg-[#181815] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl max-w-[90vw] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-mono text-[#dad7cd] text-lg uppercase tracking-widest mb-4">
              Who we work with
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-anton text-4xl md:text-5xl text-white uppercase leading-tight mb-2">
                  Our Partners
                </div>
                <div className="font-anton text-4xl md:text-5xl text-[#e5a738] uppercase leading-tight">
                  Certified Gold Partners
                </div>
              </div>
              {/* --- Carousel and Partners List --- */}
              <div className="flex-1 flex flex-col">
                <PartnerCarousel />
                <div className="text-[#dad7cd] text-base font-mono w-full">
                  <strong>
                    <a href="https://www.sophos.com/en-us">Sophos</a>
                    <br />
                    <a href="https://www.fs.com/au">FibreStore</a>
                    <br />
                    <a href="https://www.supermicro.com/en/">SuperMicro</a>
                    <br />
                    <a href="https://www.hpe.com/us/en/home.html">HP</a>
                    <br />
                    <a href="https://www.proxmox.com/">Proxmox</a>
                    <br />
                    <a href="https://www.veeam.com/">Veeam</a>
                    <br />
                    <a href="https://www.3cx.com/">3CX</a>
                    <br />
                  </strong>
                  <p className="mt-4">
                    & Many more
                  </p>
                </div>
              </div>
              {/* --- End Carousel and Partners List --- */}
            </div>
          </motion.div>
        </div>

 {/* FOOTER (STATIC, NO ANIMATION) */}
 <Footer  />
      </section>

    </div>
  );
}
