import RootLayout from "./layout";
import Link from "next/link";
import HomeLayout from "./HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-between items-center h-screen text-neutral-50 text-center">
        <div className="flex flex-col items-center mt-32">
          <h3 className="text-2xl">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="text-7xl">SPACE</h1>
          <p className="text-base leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          href="/destination"
          className="text-neutral-950 text-3xl bg-white w-48 h-48 flex items-center justify-center rounded-full mb-32"
        >
          EXPLORE
        </Link>
      </div>
    </HomeLayout>
  );
}
