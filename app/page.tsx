import CTAButton from "@/components/CTA";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <Hero>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
        <div className="flex gap-12 flex-col justify-start">
          <h1 className="md:text-5xl text-4xl font-bold leading-relaxed">
            Building high-quality{" "}
            <span className="md:text-5xl text-4xl font-bold bg-[radial-gradient(circle,#D9BBFF_0%,#9747FF_100%)] bg-clip-text text-transparent leading-loose">
              web applications
            </span>{" "}
            that are responsive, performant and easy to use.
          </h1>
          <CTAButton>Get in touch</CTAButton>
        </div>
      </div>
    </Hero>
  );
}
