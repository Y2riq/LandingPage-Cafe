import { signatures } from "@/data/coffeeData";

export default function SignatureMenu() {
  return (
    <section id="menu" className="bg-white px-6 py-20 dark:bg-[#15100c]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.35em] text-[#c78b63] dark:text-[#d4a574]">
            Our Craft
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2b160d] dark:text-white md:text-4xl">
            Highlighted Signature
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 dark:text-gray-300">
            From classic espresso to signature blends, each cup tells a story
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {signatures.map((item) => (
            <article key={item.name} className="group">
              <div className="overflow-hidden rounded-xl bg-[#f8f3ee] dark:bg-[#2a1b12]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 md:h-60"
                />
              </div>

              <div className="pt-4">
                <p className="font-accent text-xs font-semibold uppercase tracking-[0.25em] text-[#c78b63] dark:text-[#d4a574]">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#2b160d] dark:text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full bg-[#7a3f1d] px-7 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#9a552a] dark:bg-[#8b4513] dark:hover:bg-[#a0522d]">
            Explore Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}