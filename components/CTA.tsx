import { Button } from "@heroui/button";
import { ReactNode } from "react";
import "./cta.scss";
const CTAButton = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Button {...rest} className="dimm-cta">
      {children}
    </Button>
  );
};

export default CTAButton;
