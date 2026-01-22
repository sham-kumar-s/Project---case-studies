import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function ImageSearchOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Image Search Application
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            This project is a frontend-focused image search application that
            allows users to search and browse images in real time using a public
            image API. The main focus is on user experience, performance, and
            efficient API usage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
          <SectionHeader
            title="Problem Statement"
            subtitle="Building an efficient image search experience"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Image search applications need to provide fast, intuitive search
            experiences while managing API rate limits and optimizing image
            loading. Poor implementations result in slow load times, wasted
            API calls, and frustrated users.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Fast search response times</li>
            <li>Efficient API usage and caching</li>
            <li>Smooth image loading and lazy loading</li>
            <li>Responsive grid layouts</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
          <SectionHeader
            title="System Architecture"
            subtitle="Frontend-focused design"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The application follows a simple client-side architecture where
            React components handle user interactions, API calls, and state
            management. No backend is required as it uses a public image API.
          </p>

          <h3 className="text-lg font-semibold mb-2">Core Components</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Search input with debouncing</li>
            <li>Image grid with lazy loading</li>
            <li>API service layer for requests</li>
            <li>State management for search results</li>
          </ul>
        </section>

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
          <SectionHeader
            title="Data Model"
            subtitle="Client-side state management"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The application manages state locally using React hooks. Data
            includes search queries, image results, loading states, and
            pagination information.
          </p>

          <h3 className="text-lg font-semibold mb-2">State Structure</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li><strong>searchQuery</strong> – current search term</li>
            <li><strong>images</strong> – array of image results</li>
            <li><strong>loading</strong> – API request status</li>
            <li><strong>page</strong> – current pagination page</li>
          </ul>
        </section>

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
          <SectionHeader
            title="API Integration"
            subtitle="Working with external image APIs"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The application integrates with a public image search API (e.g.,
            Unsplash, Pexels) to fetch images based on user queries. API calls
            are optimized with debouncing and caching.
          </p>

          <h3 className="text-lg font-semibold mb-2">API Features</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
            <li>Debounced search to reduce API calls</li>
            <li>Pagination for large result sets</li>
            <li>Error handling for failed requests</li>
            <li>Response caching for repeated searches</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed">
            The API service layer abstracts API calls and handles rate limiting
            gracefully.
          </p>
        </section>

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="Protecting API keys and user data"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            While the application is frontend-only, security considerations
            include protecting API keys and ensuring safe image loading.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Environment variables for API keys</li>
            <li>HTTPS for all API requests</li>
            <li>Content Security Policy (CSP) headers</li>
            <li>Input sanitization for search queries</li>
          </ul>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Performance Optimization"
            subtitle="Handling large image sets"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Performance is optimized through lazy loading, image compression,
            and efficient rendering techniques.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Lazy loading images as user scrolls</li>
            <li>Responsive images with srcset</li>
            <li>Virtual scrolling for large lists</li>
            <li>CDN-hosted images for fast delivery</li>
          </ul>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="Challenges encountered"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Initial versions suffered from excessive API calls and slow image
            loading, leading to poor user experience and hitting rate limits.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Too many API calls without debouncing</li>
            <li>Loading all images at once caused slowdowns</li>
            <li>No error handling for failed API requests</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed mt-6">
            These issues were resolved by implementing debouncing, lazy loading,
            and proper error boundaries.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
          <SectionHeader
            title="Improvements & Future Work"
            subtitle="Enhancing the search experience"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Future improvements could include advanced filters, image collections,
            and offline support.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Advanced filters (color, orientation, size)</li>
            <li>User collections and favorites</li>
            <li>Offline caching with service workers</li>
            <li>Image download and sharing features</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
