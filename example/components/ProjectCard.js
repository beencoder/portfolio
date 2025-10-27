import Link from 'next/link';

export default function ProjectCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white transition hover:shadow-md">
      <img src={item.thumb} alt="" className="aspect-video w-full object-cover" />
      <div className="p-5">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{item.summary}</p>
        <div className="mt-4 flex gap-3">
          {item.demo && (
            <a className="text-sm underline" href={item.demo} target="_blank">
              Demo
            </a>
          )}
          {item.github && (
            <a className="text-sm underline" href={item.github} target="_blank">
              GitHub
            </a>
          )}
          <Link className="text-sm underline" href={`/projects/${item.id}`}>
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}
