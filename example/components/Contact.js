export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-6 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-gray-600">email@example.com</p>
        <div className="mt-3 text-sm">
          <a className="underline" href="https://github.com/you" target="_blank">
            GitHub
          </a>
          <span className="mx-2">·</span>
          <a className="underline" href="https://linkedin.com/in/you" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
