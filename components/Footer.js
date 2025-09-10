export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-6 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} YourName · Built with Next.js
      </div>
    </footer>
  );
}
