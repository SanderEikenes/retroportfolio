import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { sendEmail } from "@/lib/sendEmail";

export default function Contact() {
  return (
    <div className="mt-32 md:mx-20 mx-8">
      <h2 className="font-bold text-4xl">Contact</h2>
      <form
        className="flex flex-col mt-8"
        action={async (formData) => {
          "use server";
          await sendEmail(formData);
        }}
      >
        <div className="flex flex-col w-1/2">
          <label className="font-bold text-3xl mt-12" htmlFor="email">
            Email
          </label>
          <Input
            placeholder=""
            type="email"
            id="email"
            name="email"
            required
            className="bg-white rounded-full md:w-full w-80 text-black text-2xl mt-5"
          />
          <label className="font-bold text-3xl mt-12" htmlFor="subject">
            Subject
          </label>
          <Input
            placeholder=""
            type="text"
            id="subject"
            name="subject"
            required
            className="bg-white rounded-full md:w-full w-80 text-black mt-5"
          />
          <label className="font-bold text-3xl mt-12" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-white rounded-xl md:w-full w-80 h-40 text-black text-2xl mt-5 p-4"
            placeholder=""
            id="message"
            name="message"
            required
          />
          <Button className="bg-[#E9A716] border-4 p-4 border-white text-white w-52 rounded-full text-2xl mt-5 mx-auto">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
