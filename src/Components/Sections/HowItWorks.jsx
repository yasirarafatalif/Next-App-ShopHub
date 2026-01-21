import { ShoppingBag, CreditCard, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "Choose Products",
    desc: "Browse our collection and select the best items for you.",
    color: "bg-blue-500",
  },
  {
    id: "02",
    icon: <CreditCard className="w-8 h-8 text-white" />,
    title: "Secure Checkout",
    desc: "Add to cart and pay securely with our multiple payment methods.",
    color: "bg-purple-500",
  },
  {
    id: "03",
    icon: <PackageCheck className="w-8 h-8 text-white" />,
    title: "Order Processing",
    desc: "We carefully pack your products to ensure they reach you safely.",
    color: "bg-orange-500",
  },
  {
    id: "04",
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Fast Delivery",
    desc: "Receive your order at your doorstep within the promised time.",
    color: "bg-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How ShopHub Works
          </h2>
          <p className="text-gray-500 text-lg">
            A simple and easy 4-step process to get your favorite products delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting Line (Only for Desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                {/* Step Number Badge */}
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {step.id}
                </span>
                
                {/* Icon Circle */}
                <div className={`${step.color} p-6 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm px-4 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}