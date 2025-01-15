import Image from "next/image";

let projects = [
  {
    title: "Project 1",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
  {
    title: "Project 2",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
  {
    title: "Project 3",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
  {
    title: "Project 4",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
  {
    title: "Project 5",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
  {
    title: "Project 6",
    description: "Client project",
    image: "/creatorcontestweb.png",
  },
];

export default function Projects() {
  return (
    <div className="mt-32 mx-20">
      <h2 className="font-bold text-4xl">Projects</h2>
      <div className="flex flex-col justify-center items-center min-w-screen mt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-2xl w-max text-black transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-96 h-48 bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="font-bold text-3xl mt-4">{project.title}</h2>
              <p className="font-normal text-xl">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
