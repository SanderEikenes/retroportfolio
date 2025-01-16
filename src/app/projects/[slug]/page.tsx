import { sanityClient, urlFor } from "../../../lib/sanity";
import { fullBlog } from "@/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
      *[_type == "blog" && slug.current == "${slug}"] {
      title,
      content,
      titleImage,
      }[0]`;

  const data = await sanityClient.fetch(query);
  return data;
}

type tParams = Promise<{ slug: string }>;

export default async function BlogArticle(props: { params: tParams }) {
  const data: fullBlog = await getData((await props.params).slug);
  return (
    <div className="flex flex-col justify-center mt-8">
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={800}
        height={800}
        className="rounded-2xl my-8 mx-auto"
      />
      <h1 className="text-3xl font-bold mx-auto">{data.title}</h1>
      <div className="prose md:prose-lg mx-4 md:mx-auto prose-invert prose-h4:text-3xl overflow-hidden break-words">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
