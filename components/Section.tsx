import { ReactNode } from "react";

const Section = (props: { children: ReactNode }) => {
  return (
    <section className="container mx-auto max-w-7xl px-6 flex-grow py-20">
      {props.children}
    </section>
  );
};

export default Section;
