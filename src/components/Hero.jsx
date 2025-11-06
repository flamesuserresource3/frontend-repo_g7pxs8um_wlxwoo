import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0xq4mD2WAPQp6Ckz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">Handcrafted with love</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Elegant Shawls & Bespoke Resin Art
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Discover premium fabrics, artisanal patterns, and one-of-a-kind resin creations for decor and gifting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center rounded-full bg-rose-600 text-white px-6 py-3 font-medium shadow hover:bg-rose-700 transition-colors">Shop Collections</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium shadow ring-1 ring-gray-200 hover:bg-gray-50">Custom Orders</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white"></div>
    </section>
  );
}
