"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

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
          {/* Main hero headline */}
        </div>
      </section>

      <section className="w-full min-h-[35vh] bg-[#181815] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl max-w-[90vw] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-mono text-[#dad7cd] text-lg uppercase tracking-widest mb-4">
              Next Step Infrastructure Services Pty Ltd
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-anton text-4xl md:text-5xl text-white uppercase leading-tight mb-2">
                  8 Binney Rd, Kings Park NSW 2148
                </div>
                <div className="font-anton text-4xl md:text-5xl text-[#e5a738] uppercase leading-tight mb-4">
                  ABN: 11633735369
                </div>
                {/* Responsive Google Maps iframe */}
                <div className="w-full h-[350px] rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6635.35277201245!2d150.90578947701138!3d-33.74318337327494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298d86280b279%3A0x14566bb2a332c3b7!2s8%20Binney%20Rd%2C%20Kings%20Park%20NSW%202148!5e0!3m2!1sen!2sau!4v1751666926520!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="8 Binney Rd Map"
                  />
                </div>
              </div>
              <div className="flex-1 text-[#dad7cd] text-base font-mono">
                <strong>
                  <a href="tel:1800101015">1800 10 10 15</a>
                  <br />
                  <a href="mailto:sales@nsis.com.au">sales@nsis.com.au</a>
                </strong>
                <div className="flex">
  <button className="mt-6 px-6 py-2 bg-[#f5f5f5] text-[#181815] font-mono uppercase rounded transition hover:bg-[#dad7cd] hover:text-[#181815]">
    Are you ready to take the Next Step?
  </button>
</div>

              </div>
            </div>
          </motion.div>
        </div>
             {/* FOOTER (STATIC, NO ANIMATION) */}
 <Footer  />
      </section>

    </div>
  );
}
