import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container">
          <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 h-[600px]">
            <div className="mr-auto place-self-center lg:col-span-6 relative">
              <div className="absolute inset-x-0 -top-5 h-80 max-w-lg bg-gradient-to-tr from-[#9fdb67] via-[#00ffab36] to-[#00ffab] blur-[118px] -z-10"></div>
              <h1 className="max-w-2xl mb-4 text-4xl font-oswald font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Simplify your choices and reach decisions quickly.
              </h1>
              <p className="max-w-2xl mb-6 font-light font-lato  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Empowering you to make confident choices <br /> and achieve your
                goals easily.
              </p>
              <Link
                href="/sandbox"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-[260px] h-[260px] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-brand group-hover:-rotate-180 ease"></span>
                  <span className="relative flex items-center gap-2">
                    Let&apos;s make a decision
                    <span>
                      <ArrowRightIcon width={24} height={24} />
                    </span>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-6 lg:flex relative">
              <Image src="/illustration_hero.svg" fill alt="mockup" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
