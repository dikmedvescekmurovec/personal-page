import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";

export const GetInTouch = () => {
  return (
    <Card>
      <CardBody className="p-12 flex flex-row gap-16">
        <div className="flex flex-col flex-1 gap-32">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold ">
              Let's bring your{" "}
              <span className="font-bold bg-[radial-gradient(circle,#D9BBFF_0%,#9747FF_100%)] bg-clip-text text-transparent">
                ideas to life!
              </span>
            </h1>
            <p>
              Send me a quick message and let’s get started with a quick and
              free consultation.
            </p>
          </div>
          <p className="dimm-note text-sm">
            Your information will only be used for the purposes of reaching out
            to you, and will not be shared with third parties.
          </p>
        </div>
        <form className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-4">
            <Input label="Email" placeholder="Enter your email" type="email" />
            <Input label="Email" placeholder="Enter your email" type="email" />
            <Textarea
              label="Message"
              placeholder="Describe your wants and needs"
            />
          </div>
          <Button>Send message</Button>
        </form>
      </CardBody>
    </Card>
  );
};
