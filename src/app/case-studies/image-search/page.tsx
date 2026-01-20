import PageTransition from "@/app/components/animations/PageTransition";

export default function ImageSearchOverview() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">
          Image Search Application
        </h1>

        <p className="text-neutral-300 leading-relaxed mb-6">
          This project is a frontend-focused image search application that
          allows users to search and browse images in real time using a public
          image API. The main focus is on user experience, performance, and
          efficient API usage.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Frontend: React</li>
              <li>Styling: CSS / Tailwind</li>
              <li>API: Public Image Search API</li>
              <li>Hosting: Netlify</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Key Focus Areas</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Search UX</li>
              <li>API efficiency</li>
              <li>Frontend performance</li>
              <li>Responsive layout</li>
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
