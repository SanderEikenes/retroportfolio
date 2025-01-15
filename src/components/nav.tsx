import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="hidden md:flex items-center justify-between mt-10 mx-11">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Eikeneslogo.svg" alt="Logo" width={344} height={67} />
          </Link>
        </div>
        <div className="flex items-center space-x-16 text-2xl font-normal">
          <Link href="/#projects">
            <p>Projects</p>
          </Link>

          <Link href="/#about">
            <p>About</p>
          </Link>

          <Link href="/#contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className="md:hidden mx-4 flex items-center justify-between mt-4">
        <div>
          <Link href="/">
            <Image src="/Eikeneslogo.svg" alt="Logo" width={150} height={67} />
          </Link>
        </div>
        <div className="flex space-x-4 text-lg font-normal translate-y-1.5">
          <Link href="/#projects">
            <p>Projects</p>
          </Link>

          <Link href="/#about">
            <p>About</p>
          </Link>

          <Link href="/#contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <hr className="mx-7 md:mt-10 mt-4 border-2 md:border-4 border-[#E5E8CA]" />
    </nav>
  );
}
