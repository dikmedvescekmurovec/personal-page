import { Button } from "@heroui/button";

import Section from "@/components/Section";

export default function Home() {
  return (
    <Section>
      <div className="flex gap-6 flex-col">
        <h1 className="text-4xl font-bold leading-relaxed">
          Building high-quality{" "}
          <span className="text-4xl font-bold bg-[radial-gradient(circle,#D9BBFF_0%,#9747FF_100%)] bg-clip-text text-transparent leading-loose">
            web applications
          </span>{" "}
          that are responsive, performant and easy to use.
        </h1>
        <Button className="border-white border-1 border-solid rounded-full px-10 py-6 text-lg bg-[#6514CF] max-w-fit">
          Get in touch
        </Button>
      </div>
    </Section>
  );
}
