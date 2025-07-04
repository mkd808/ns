"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function EvoPage() {
  // Section 3 animation setup
  const section3Ref = useRef(null);
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });

  // Budget statement animation setup
  const budgetRef = useRef(null);
  const isBudgetInView = useInView(budgetRef, { once: true, margin: "-100px" });

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
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center" }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-white/60" />
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
                src="/lrg-logo-2.svg"
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
              text-[16.6px]
              font-medium
              leading-[16.32px]
              tracking-[1.36px]
              text-[#171713]
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
              Your Trusted Partner
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-anton text-4xl md:text-5xl text-white uppercase leading-tight mb-2">
                  for IT Architecture
                </div>
                <div className="font-anton text-4xl md:text-5xl text-[#e5a738] uppercase leading-tight">
                  Security and Support
                </div>
              </div>
              <div className="flex-1 text-[#dad7cd] text-base font-mono">
                <strong>
                  <button className="mt-6 px-6 py-2 bg-[#f5f5f5] text-[#181815] font-mono uppercase rounded transition hover:bg-[#dad7cd] hover:text-[#181815]">
                    Our Company.
                  </button>
                  <br />
                  <br />
                  Next Step Infrastructure Services is a close-knit team of Information technology professionals with over 30 collective years of industry experience within the Australian business market. Our mission is to provide a comprehensive range of products and services to accommodate the needs of small to medium, enterprise and government customers.
                </strong>
                <p className="mt-4">
                  We assist organisations by delivering industry leading recommendations and solutions to satisfy business requirements, working closely with our customers, in collaboration with our technology vendors and channel partners to provide the most efficient and effective hosting services for any business platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        ref={section3Ref}
        className="w-full min-h-[0vh] bg-[#DAD7CD] flex flex-col items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-4xl max-w-[90vw] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              {/* Headline Block (right on md+) */}
              <div className="flex-1 md:text-right">
                <div className="font-anton text-4xl md:text-5xl text-[#171713] uppercase leading-tight mb-2">
                  We are a complete 
                </div>
                <div className="font-anton text-4xl md:text-5xl text-[#e5a738] uppercase leading-tight">
                  IT service provider
                </div>
              </div>
              {/* Text Content (left on md+) */}
              <div className="flex-1 md:text-left">
                <p className="text-[#171713] font-mono text-base font-mono">
                  <strong>
                    Providing all the required tools, interconnectivity, communication, and infrastructure for your business to not only stay connected but operate both effectively and efficiently. Our team works with you to create solutions that deliver productivity and savings.
                  </strong>
                </p>
                <p className="text-[#171713] font-mono text-base mb-4">
                  <br />
                  Our solutions are based on technology and service elements which are tailored to address customer and industry challenges.
                </p>
                <p className="text-[#171713] font-mono text-base mb-4">
                  Our consultative and technological approach to understanding your needs, coupled with our proven expertise across a broad range of IT Infrastructure technologies and extensive experience with solving migration and implementation problems, positions us uniquely to build the best solutions for your business.
                </p>
                <br />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUDGET STATEMENT (Animated on scroll into view) */}
      <div
        ref={budgetRef}
        className="w-full flex items-center justify-center py-8 px-2"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isBudgetInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-anton text-[22px] sm:text-[18px] text-[#dad7cd] uppercase leading-tight text-center font-bold break-words whitespace-normal"
        >
          We always find the very best<br />
          products and services to fit all your needs,<br />
          and most importantly, your budget.
          <span className="block" style={{ height: "3em" }} />
          <br />
        </motion.p>
      </div>

      {/* FOOTER (STATIC, NO ANIMATION) */}
      <Footer company="NSIS Pty Ltd" phone="1800 10 10 15" email="sales@nsis.com.au" />
    </div>
  );
}
