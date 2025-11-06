export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-rose-50/60 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Crafted in Small Batches</h2>
            <p className="mt-4 text-gray-700">
              We are a homegrown studio specializing in premium shawls and bespoke resin art.
              Each piece is thoughtfully designed and made with high-quality materials, ensuring
              durability and a luxurious finish. From elegant winter essentials to eye-catching
              decor, our creations are perfect for gifting and personal use.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Handpicked fabrics and archival-grade resin</li>
              <li>• Custom color palettes and personalization</li>
              <li>• Gift-ready packaging available</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop" alt="shawl fabric" />
            <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1656725035727-7779ed46eb1e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGFydHxlbnwwfDB8fHwxNzYyNDMwNDc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="resin art" />
            <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1697781826540-20cff4de8acd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzaGF3bHxlbnwwfDB8fHwxNzYyNDMwNDc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="shawl" />
            <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1579182874016-50f3cfba230a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMHRyYXl8ZW58MHwwfHx8MTc2MjQzMDQ3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="resin tray" />
          </div>
        </div>
      </div>
    </section>
  );
}
