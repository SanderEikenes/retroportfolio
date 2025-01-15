import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20">
      <hr className="mx-7 mt-10 border-4 border-[#E5E8CA]" />
      <div className="my-10 mx-11 flex justify-between items-center">
        <Image src="/Eikeneslogofull.svg" alt="logo" width={300} height={67} />
        <p className="font-normal text-xl">
          © 2024 Sander Eikenes. All rights reserved
        </p>
        <div className="flex space-x-4">
          <Image
            src="/socialicons/instagram.png"
            alt="Instagram"
            width={30}
            height={30}
          />
          <Image
            src="/socialicons/github.png"
            alt="Github"
            width={30}
            height={30}
          />
          <Image
            src="/socialicons/linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
          />
          <Image src="/socialicons/x.png" alt="X" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}
