import { services } from "@/data/coffeeData";

export default function Services() {
  return (
    <section className="bg-[#f4f0eb] px-6 py-20 dark:bg-[#1e1711]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.35em] text-[#c78b63] dark:text-[#d4a574]">
            What We Serve
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2b160d] dark:text-white md:text-4xl">
            More Than Coffee
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7a3f1d] text-white dark:bg-[#8b4513]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-[#2b160d] dark:text-white">
                  {service.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[230px] text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}