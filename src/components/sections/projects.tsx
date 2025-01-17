import Image from "next/image";
import { sanityClient, urlFor } from "../../lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    tags,
  }`;

  const data = await sanityClient.fetch(query);
  console.log(data);

  return data;
}

export default async function Projects() {
  const data: simpleBlogCard[] = await getData();

  console.log(data[0].currentSlug);

  return (
    <div className="mt-32 md:mx-20 mx-8">
      <h2 className="font-bold text-4xl">Projects</h2>
      <div className="flex flex-col justify-center items-center min-w-screen md:mt-20 mt-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {data.map((post, index) => (
            <Link href={`/projects/${post.currentSlug}`} key={index}>
              <div className="p-4 bg-white rounded-2xl w-max text-black transform transition-transform duration-300 hover:scale-105">
                <div className="md:w-96 md:h-48 w-80 h-40 bg-black">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="font-bold text-3xl mt-4">{post.title}</h2>
                <div className="space-x-2 mt-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-black text-white px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
