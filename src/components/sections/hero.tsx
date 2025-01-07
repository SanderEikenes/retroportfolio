import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center justify-between mx-40">
      <div className="mt-20 font-bold">
        <h3 className="text-5xl font-semibold">Hi, I'm</h3>
        <h1 className="text-8xl">
          Sander <br />
          Eikenes
        </h1>
        <h2 className="text-5xl font-semibold">Web designer & Developer</h2>
        <h1 className="font-normal text-xl">
          I'm a web developer from Norway <br /> with several client projects
          completed.
        </h1>
      </div>
      <Image
        src="/me.png"
        alt="Hero"
        width={400}
        height={400}
        className="mx-14 mt-10 rounded-2xl"
      />
    </div>
  );
}
