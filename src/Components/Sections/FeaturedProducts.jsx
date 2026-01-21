import { Star, ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 299,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 120,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 75,
    category: "Gadgets",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&q=80",
  },
  {
    id: 4,
    name: "Premium Cotton Hoodie",
    price: 55,
    category: "Fashion",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Items</h2>
            <p className="text-gray-500 mt-2">Most loved products by our ShopHub community.</p>
          </div>
          <Link href="/items"
          
          className="mt-4 md:mt-0 text-orange-500 font-semibold hover:underline decoration-2"
          >
            View All Products &rarr;

          </Link>
          {/* <button className="mt-4 md:mt-0 text-orange-500 font-semibold hover:underline decoration-2">
            View All Products &rarr;
          </button> */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex flex-col flex-grow">
                <span className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Rating & Price */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}