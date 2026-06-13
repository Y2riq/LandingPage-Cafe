import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="absolute left-0 top-0 z-20 w-full dark:bg-black/30">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <a href="#" className="text-lg font-semibold tracking-wide text-white dark:text-white">
                    Monkey Coffee
                </a>

                <nav className="hidden items-center gap-8 text-sm text-white md:flex">
                    <a href="#menu" className="text-sm text-white hover:text-gray-300">
                        Menu
                    </a>
                    <a href="#ambience" className="text-sm text-white hover:text-gray-300">
                        Ambience
                    </a>
                    <a href="#about" className="text-sm text-white hover:text-gray-300">
                        About
                    </a>
                    <a href="#visit" className="text-sm text-white hover:text-gray-300">
                        Visit
                    </a>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    )
}