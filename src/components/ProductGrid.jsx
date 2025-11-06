const products = [
  {
    id: 1,
    title: "Cashmere Shawl - Rose Mist",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1617038260897-76eb22b510bb?q=80&w=1200&auto=format&fit=crop",
    tag: "Shawl",
  },
  {
    id: 2,
    title: "Handloom Pashmina - Midnight",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    tag: "Shawl",
  },
  {
    id: 3,
    title: "Ocean Pour Coaster Set (4)",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1612198182729-1d39d9839ba6?q=80&w=1200&auto=format&fit=crop",
    tag: "Resin",
  },
  {
    id: 4,
    title: "Floral Resin Tray",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1590520512141-b206eee4e5d0?q=80&w=1200&auto=format&fit=crop",
    tag: "Resin",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
            <p className="mt-2 text-gray-600">Curated pieces ready to ship. For custom sizes or colors, reach out below.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-rose-600 text-white px-5 py-2.5 font-medium shadow hover:bg-rose-700">Request Custom</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-rose-700 bg-rose-50 ring-1 ring-rose-200 px-2 py-1 rounded-full">{p.tag}</span>
                  <span className="text-gray-900 font-semibold">${p.price}</span>
                </div>
                <h3 className="mt-2 font-medium text-gray-900 line-clamp-2">{p.title}</h3>
                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="inline-flex-1 flex-1 text-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black">Enquire</a>
                  <button className="inline-flex-1 flex-1 rounded-md bg-white ring-1 ring-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">Save</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
