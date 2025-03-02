import { ReactNode } from "react";
import "./hero.scss";
export const Hero = (props: { children: ReactNode }) => (
  <main className="w-full bg-gradient-to-tr from-[#360E6A] via-[#1E1D27] via-25% to-[#1E1D27]">
    <div className="container mx-auto max-w-7xl pt-16 pb-40 px-6 flex-grow ">
      {props.children}
    </div>
  </main>
);
