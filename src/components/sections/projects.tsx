import Image from "next/image";
import { sanityClient, urlFor } from "../../lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,   
  }`;

  const data = await sanityClient.fetch(query);

  return data;
}

export default async function Projects() {
  const data: simpleBlogCard[] = await getData();
  console.log(data[0].currentSlug);

  return (
    <div className="mt-32 mx-20">
      <h2 className="font-bold text-4xl">Projects</h2>
      <div className="flex flex-col justify-center items-center min-w-screen mt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {data.map((post, index) => (
            <Link href={`/projects/${post.currentSlug}`} key={index}>
              <div className="p-4 bg-white rounded-2xl w-max text-black transform transition-transform duration-300 hover:scale-105">
                <div className="w-96 h-48 bg-black">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="font-bold text-3xl mt-4">{post.title}</h2>
                <p className="font-normal text-xl">{post.smallDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
