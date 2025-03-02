import CTAButton from "./CTA";
import "./hero.scss";
export const Hero = () => (
  <main className="dimm-hero">
    <div className="container">
      <div className="mx-auto max-w-7xl pt-16 px-6 flex-grow ">
        <div className="flex gap-12 flex-col justify-start text-white">
          <h1 className="font-bold">
            Building high-quality{" "}
            <span className="font-bold bg-[radial-gradient(circle,#D9BBFF_0%,#9747FF_100%)] bg-clip-text text-transparent">
              web applications
            </span>{" "}
            that are responsive, performant and easy to use.
          </h1>
          <CTAButton>Get in touch</CTAButton>
        </div>
      </div>
    </div>
  </main>
);
