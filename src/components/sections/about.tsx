export default function About() {
  return (
    <div className="mt-32 md:mx-20 flex md:flex-row flex-col justify-between items-center">
      <div className="md:w-1/3 mx-8 md:mx-0 animate-slideInLeft">
        <h2 className="font-bold text-4xl">About me</h2>
        <p className="font-normal text-xl mt-5">
          I am currently studying Cyber Security at the University of Bergen, at
          the same time, I am working on my own projects and doing freelance
          work.
        </p>
      </div>

      <div className="md:w-1/3 mx-8 mt-10 md:mt-0 animate-slideInRight">
        <div className="flex space-x-2">
          <h2 className="font-bold text-4xl">Projects</h2>
        </div>
        <p className="font-normal text-xl mt-2">
          My projects range from simple web-pages to full applications, and I am
          always looking for new challenges to work on. I have a passion for
          creating functional software, and I am always looking for new ways to
          improve my skills and knowledge.
        </p>
      </div>
    </div>
  );
}
