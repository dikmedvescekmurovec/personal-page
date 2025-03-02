import { Divider } from "@heroui/divider";
import Image from "next/image";

import svgLogo from "../public/logo.svg";

import "./footer.scss";
import { GetInTouch } from "./GetInTouch/GetInTouch";
import Section from "./Section";

export const Footer = () => {
  return (
    <div className="dimm-footer">
      <Section>
        <div className="dimm-footer__content">
          <GetInTouch />
          <div className="dark flex flex-col gap-16 w-full items-center">
            <Divider />
            <Image alt="DiMM Logo" src={svgLogo} />
          </div>
        </div>
      </Section>
    </div>
  );
};
