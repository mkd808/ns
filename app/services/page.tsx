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
              Next Step Infrastructure Services Pty Ltd
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-anton text-4xl md:text-5xl text-white uppercase leading-tight mb-2">
                  What we provide
                </div>
                <div className="font-anton text-4xl md:text-5xl text-[#e5a738] uppercase leading-tight">
                  Service Elements
                </div>
              </div>
              <div className="flex-1 text-[#dad7cd] text-base font-mono">
                <strong>
                  <a href="tel:1800101015">IT Service Management</a>
                  <br />
                </strong>
                <p className="mt-4">
                  24x7 manned Service Desk<br />
                  Incident/Problem/Change Management<br />
                  Escalation Management<br />
                  Project Management<br />
                </p>
                <br />
                <strong>
                  Desktop Management
                </strong>
                <p className="mt-4">
                  SOE Management<br />
                  Operating System Management<br />
                  Patch Management<br />
                  Asset Management<br />
                </p>
                <br />
                <strong>
                  Vendor Management
                </strong>
                <p className="mt-4">
                  Escalation Management<br />
                  Vendor Hardware Support<br />
                  Administration of Subscription Services<br />
                </p>
                <br />
                <strong>
                  Managed Hosting
                </strong>
                <p className="mt-4">
                  Hosting Equipment<br />
                  Hosting Equipment Capacityt<br />
                  Hosting Management<br />
                </p>
                <br />
                <strong>
                  Managed Backup
                </strong>
                <p className="mt-4">
                  Backup and Restore Services<br />
                  Proactive Maintenance<br />
                  Dedicated Backup Hardware<br />
                  Hardware Maintenance<br />
                </p>
                <br />
                <strong>
                  Server Management
                </strong>
                <p className="mt-4">
                  Operating System Management<br />
                  Patch Management<br />
                  Asset Management<br />
                  Hardware Maintenance<br />
                </p>
                <br />
                <strong>
                  Monitoring
                </strong>
                <p className="mt-4">
                  Availability Monitoring<br />
                  Hardware Fault Monitoring<br />
                  Proactive Health Monitoring<br />
                  Client Notification<br />
                  Service Desk Integration<br />
                  <br />
                </p>
                <strong>
                  Monitoring
                </strong>
                <p className="mt-4">
                  Device Administration<br />
                  Patch Management<br />
                  Asset Management<br />
                  Hardware Maintenance<br />
                  IP Telephony and Voice Specialists<br />
                </p>
                <strong>
                  <br />
                  Disaster Recovery Services
                </strong>
                <p className="mt-4">
                  Preparation and Planning<br />
                  Routine Testing<br />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER (STATIC, NO ANIMATION) */}
      <Footer company="NSIS Pty Ltd" phone="1800 10 10 15" email="sales@nsis.com.au" />
    </div>
  );
}
