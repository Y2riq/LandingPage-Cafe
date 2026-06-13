export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
            src="/image/hero.jpg"
            alt="Monkey Coffee shop"
            className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <p className="font-accent mb-4 text-sm uppercase tracking-[0.4em]">Visit Us</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Find Your Coffee, Bar & Dining Escape
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
            A cozy space to sip, work, and connect.
            </p>

            <a
            href="#menu"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#3b1f12] transition hover:bg-[#b46b35] hover:text-white"
            >
            Check Our Menus
            </a>
        </div>
        </section>
    )
}