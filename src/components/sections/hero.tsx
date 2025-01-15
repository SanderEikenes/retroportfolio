import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center md:justify-between md:mx-40">
      <div className="flex justify-center items-center mt-20 font-bold mx-auto">
        <div className="">
          <h3 className="text-5xl font-semibold w-max">Hi, I'm</h3>
          <h1 className="text-8xl w-max">
            Sander <br />
            Eikenes
          </h1>
          <h2 className="w-max text-5xl font-semibold">
            Web designer & <br />
            Developer
          </h2>
          <h1 className="font-normal text-xl w-max">
            I'm a web developer from Norway <br /> with several client projects
            completed.
          </h1>
        </div>
      </div>
      <Image
        src="/me.png"
        alt="Hero"
        width={400}
        height={400}
        className="mx-14 mt-10 rounded-2xl hidden md:block"
      />
    </div>
  );
}
