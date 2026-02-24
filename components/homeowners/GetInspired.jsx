const inspirations = [
  {
    label: "Interior Design",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    label: "Fencing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    label: "Gutter Installation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    label: "Landscaping",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
    span: "col-span-1",
    height: "h-[280px]",
  },
];

export default function GetInspired() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
            Get Inspired
          </h2>
          <p className="text-gray-500 text-sm">What's next on your home to-do list? Our home experts can help.</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {inspirations.map((item) => (
            <div key={item.label} className={`${item.span} rounded-2xl overflow-hidden shadow-md group cursor-pointer`}>
              <div className={`relative ${item.height} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
