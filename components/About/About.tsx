import Section from "../Section";

import { ProfilePicture } from "./ProfilePicture";

export const About = () => {
  return (
    <Section>
      <div className="flex gap-16">
        <ProfilePicture />
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl">I'm a frontend developer,</h2>
          <p className="max-w-prose font-thin text-xl">
            I build the parts of web applications that people actually see and
            interact with. But I don't just write code—I also focus on design
            and UX — making sure everything looks and feels consistent,
            responsive, performant and easy to use.
          </p>
        </div>
      </div>
    </Section>
  );
};
