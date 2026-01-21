import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-orange-500" />,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100",
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-orange-500" />,
    title: "Easy Returns",
    description: "30-day easy return policy for all products",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    title: "Secure Payment",
    description: "100% secure payment methods supported",
  },
  {
    icon: <Headphones className="w-10 h-10 text-orange-500" />,
    title: "24/7 Support",
    description: "Dedicated support team at your service",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-4 bg-orange-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}