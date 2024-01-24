import Image from "next/image";
import controllerIcon from "../../public/controller.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-[#A9927D] text-left flex flex-col gap-7 relative">
        <Image
          priority
          src={controllerIcon}
          alt="controller"
          className="absolute -top-20 right-0 rotate-12"
        />
        <h1 className="saving text-7xl">
          Introducing<span>.</span>
          <span>.</span>
          <span>.</span>
        </h1>
        <h2 className="text-7xl font-bold">Path of Gaming</h2>
        <h3 className="text-base text-right font-semibold">The gaming coach</h3>
        <button className="bg-[#A9927D] w-fit text-[#F2F4F3] rounded-full px-4 py-2 hover:bg-[#0A0908] border-2 border-[#A9927D]">
          Book session
        </button>
      </div>
    </main>
  );
}
