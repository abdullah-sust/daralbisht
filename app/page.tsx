import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/shop_background.png"
          alt="DarAlBisht"
          width={958}
          height={493}
          priority
        />
        <h6> 🇰🇼 دار البشوت</h6>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            مر كز هاي المستقبل للعبي والبشوت
          </h1>
          <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Al-Manqaf, Souk Al-Azizia, Block 4, Street 14, Lulu Complex, Shop 15, Al Ahmadi<br />
            <a
              href="tel:+96599727978"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              
            </a> 
            <a
              href="tel:+96599727978"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Please contact +965 9972 7978
            </a>{" "}
          </p>
        </div>
        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
