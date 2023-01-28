import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="https://links.papareact.com/1m8"
            alt="logo"
          />
        </Link>
        <h1>Diamond Blogs</h1>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/rishabh-parashar-/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Connect on LinkedIn
        </Link>
      </div>
    </header>
  );
}
