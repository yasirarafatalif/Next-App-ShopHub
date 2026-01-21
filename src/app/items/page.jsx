"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Link from "next/link";

const demoProducts = [
  { id: 1, name: "Premium Hoodie", price: 45, category: "Fashion", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
  { id: 2, name: "Smart Watch v2", price: 199, category: "Electronics", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { id: 3, name: "Classic Sneakers", price: 85, category: "Fashion", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  { id: 4, name: "Wireless Earbuds", price: 120, category: "Electronics", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
  { id: 5, name: "Leather Backpack", price: 65, category: "Accessories", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400" },
  { id: 6, name: "Sun Glasses", price: 30, category: "Accessories", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
];

const categories = ["All", "Electronics", "Fashion", "Accessories"];

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="h-64 bg-gray-200"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
        </div>
        <div className="h-12 w-full bg-gray-300 rounded-xl mt-6"></div>
      </div>
    </div>
  );
}

export default function DemoItems() {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems =
    filter === "All"
      ? demoProducts
      : demoProducts.filter((item) => item.category === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our Collection
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked demo items just for you
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-orange-500 font-bold uppercase">
                          {item.category}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-1">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xl font-black text-gray-900">
                        ${item.price}
                      </p>
                    </div>

                    <Link
                        href="items/details"
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors">
                    <Eye className="w-5 h-5" />
                      View Detalis
                    
                    </Link>

                    {/* <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors">
                      
                    </button> */}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
