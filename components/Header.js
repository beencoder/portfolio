import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between px-6">
        <Link href="/" className="font-semibold">
          YourName
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#skills" className="hover:opacity-70">
            Skills
          </a>
          <a href="#projects" className="hover:opacity-70">
            Projects
          </a>
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
