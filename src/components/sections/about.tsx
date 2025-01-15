export default function About() {
  return (
    <div className="mt-32 md:mx-20 flex md:flex-row flex-col justify-between items-center">
      <div className="md:w-1/3 mx-8 md:mx-0">
        <h2 className="font-bold text-4xl">About me</h2>
        <p className="font-normal text-xl mt-5">
          I am currently studying Cyber Security at the University of Bergen,
          however I do web development on the side because I find it very fun to
          build projects both for clients and for my self.
        </p>
      </div>

      <div className="md:w-1/3 mx-8 mt-10 md:mt-0">
        <div className="flex space-x-2">
          <h2 className="font-bold text-6xl">12</h2>
          <p className="font-bold leading-4 translate-y-3.5">
            Completed <br /> projects
          </p>
        </div>
        <p className="font-normal text-xl mt-2">
          In my portfolio you will find completed client-projects and my own
          software / web app projects.
        </p>
      </div>
    </div>
  );
}
