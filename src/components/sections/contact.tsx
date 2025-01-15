import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="mt-32 md:mx-20 mx-8">
      <h2 className="font-bold text-4xl">Contact</h2>
      <form className="flex flex-col w-max mt-8">
        <label className="font-bold text-3xl mt-12">Email</label>
        <Input
          placeholder=""
          className="bg-white rounded-full md:w-96 w-80 text-black text-2xl mt-5"
        />
        <label className="font-bold text-3xl mt-12">Subject</label>
        <Input
          placeholder=""
          className="bg-white rounded-full md:w-96 w-80 text-black mt-5"
        />
        <label className="font-bold text-3xl mt-12">Message</label>
        <textarea
          className="bg-white rounded-xl md:w-96 w-80 h-40 text-black text-2xl mt-5 p-4"
          placeholder=""
        />
        <Button className="bg-[#E9A716] border-4 p-4 border-white text-white w-52 rounded-full text-2xl mt-5 mx-auto">
          Send
        </Button>
      </form>
    </div>
  );
}
