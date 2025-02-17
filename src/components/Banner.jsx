import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section aria-label="Apply Banner" className="scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <Pattern className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Launch into AOSSIE&apos;s open-source world through GSoC!
            </h2>
            <p className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code.
            </p>
            <div className="mt-5">
              <Link href="/apply" legacyBehavior>
                <a className="relative inline-flex items-center px-8 py-3 font-semibold text-white bg-black rounded-lg
    border border-transparent bg-gradient-to-r from-black to-black
    hover:from-white hover:to-white hover:text-black
    font-mono text-[font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace]
    transition-all duration-300 ease-in-out">
                  Apply to GSoC with AOSSIE
                </a>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
