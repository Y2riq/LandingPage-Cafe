import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Services from "@/component/Services";
import SignatureMenu from "@/component/SignatureMenu";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#15100c]">
      <Header />
      <Hero />

      <section className="bg-white px-6 py-14 text-center dark:bg-[#15100c]">
        <div className="mb-5 flex justify-center gap-2 text-2xl text-[#b46b35] dark:text-[#d4a574] md:text-3xl">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
        <h2 className="text-2xl font-semibold text-[#2b160d] dark:text-white">
          Loved by Coffee Lovers & Creatives
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Top-rated hangout spot in the city
        </p>
      </section>

      <SignatureMenu />
      <Services />

      <section id="ambience" className="bg-[#f4f0eb] px-6 py-20 dark:bg-[#1e1711]">
        <div className="mx-auto max-w-6xl">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.35em] text-[#c78b63] dark:text-[#d4a574]">
            Ambience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2b160d] dark:text-white md:text-4xl">
            Where Moments Happen
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            A space designed for those who appreciate the finer details. From the
            natural light that fills our space to the carefully curated seating
            arrangements, every element is crafted to create an atmosphere of comfort
            and inspiration.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-[220px_220px_220px]">
            <div className="overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
              <img
                src="/image/ambience1.jpg"
                alt="Monkey Coffee ambience interior"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/ambience2.jpg"
                alt="Coffee cups ambience"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/ambience3.jpg"
                alt="Coffee shop dining area"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/ambience4.jpg"
                alt="Coffee shop front"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/ambience5.jpg"
                alt="Coffee roasters ambience"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/image/ambience6.jpg"
                alt="Coffee bar ambience"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f4f0eb] px-6 py-28 text-center dark:bg-[#1e1711]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d26b2c] dark:text-[#d4a574]">
            About Us
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-[#2b160d] dark:text-white md:text-5xl">
            A place to connect, relax,
            <br />
            and create moments.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-gray-500 dark:text-gray-300">
            At Monkey Coffee Coffee, we believe every cup is an invitation to slow
            down and savor life&apos;s simple pleasures. Whether you&apos;re meeting a
            friend, working on your next big idea, or simply enjoying a quiet moment
            alone, our doors are open to those who appreciate the art of a
            well-crafted brew and the warmth of genuine community.
          </p>
        </div>
      </section>

      <section id="visit" className="bg-white px-6 py-20 dark:bg-[#15100c]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b46b35] dark:text-[#d4a574]">
              Visit Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2b160d] dark:text-white md:text-4xl">
              Come say hello!
            </h2>

            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <strong className="text-[#2b160d] dark:text-white">Address:</strong>
                <br />
                Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip, Kec. Pontianak Kota,
                Kota Pontianak, Kalimantan Barat 78117
              </p>
              <p>
                <strong className="text-[#2b160d] dark:text-white">Hours:</strong>
                <br />
                Everyday: 06:00 AM - 02:00 AM
              </p>
              <p>
                <strong className="text-[#2b160d] dark:text-white">Contact:</strong>
                <br />
                +628 1234 5678 90
              </p>
            </div>
          </div>

          <img
            src="/image/frontstore.jpg"
            alt="Monkey Coffee front store"
            className="h-80 w-full rounded-3xl object-cover dark:ring-1 dark:ring-gray-700"
          />
        </div>
      </section>

      <footer className="bg-[#2b160d] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Monkey Coffee</h3>
            <p className="mt-3 text-sm text-white/70">
              Crafting moments, one cup at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Menu</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Our Signatures</li>
              <li>Non Coffee</li>
              <li>Food</li>
              <li>Pastry</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/60">
          © 2026 Monkey Coffee. All rights reserved.
        </p>
      </footer>
    </main>
  );
}


