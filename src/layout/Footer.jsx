import React from "react";
import LinkIcon from "../components/LinkIcon";

function Footer() {
  return (
    <footer className="footer_section text-center ">
      <p className="mb-1">© {new Date().getFullYear()} Nagnath Edake</p>
      <p className="mb-0">Web Developer | React • REST-APIs • MySQL</p>
      {/* <LinkIcon path={"/about"} iconName={"facebook"} />
      <LinkIcon path={"/about"} iconName={"instagram"} /> */}
      <LinkIcon path={"https://github.com/NagnathEdake"} iconName={"github"} />
    </footer>
  );
}

export default Footer;
