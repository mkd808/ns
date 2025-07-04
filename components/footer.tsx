import React from "react";

type FooterProps = {
  company?: string;
  phone?: string;
  email?: string;
};

const Footer: React.FC<FooterProps> = ({
  company = "NSIS Pty Ltd.",
  phone = "1800 10 10 15",
  email = "sales@nsis.com.au",
}) => (
  <footer className="w-full bg-black flex flex-col items-center justify-center">
    <div className="h-[90px] flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
      <span className="text-[#dad7cd] font-mono uppercase text-[12px]">
        {company}
      </span>
      <a
        href={`tel:${phone.replace(/\s+/g, "")}`}
        className="text-[#e5a738] underline font-mono text-[12px] ml-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {phone}
      </a>
      <a
        href={`mailto:${email}`}
        className="text-[#1db2a6] underline font-mono text-[12px] ml-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {email}
      </a>
    </div>
    <div className="w-full text-center pb-8 pr-8">
  <span className="text-[#dad7cd] font-mono text-xs opacity-70">
    © Next Step Infrastructure Services Pty Ltd     
  </span>    <span> </span>
</div>

  </footer>
);

export default Footer;
