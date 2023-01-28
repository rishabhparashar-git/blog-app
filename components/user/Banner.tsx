export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 px-5 mb-7">
      <div className="">
        <h1 className="text-7xl">Diamond Blogs</h1>
        <h2 className="mt-5 md:mt-0 font-semibold">
          Welcome to{" "}
          <span className="underline decoration-2 decoration-[#F7AB0A]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product Features | The Latest Tech News | Weekly debugging
        nightmares & More!
      </p>
    </div>
  );
}
