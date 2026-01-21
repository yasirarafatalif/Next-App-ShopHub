import { Lock, ShieldCheck, UserCheck, KeyRound } from "lucide-react";

const authFeatures = [
  {
    icon: <Lock className="w-6 h-6 text-green-600" />,
    title: "End-to-End Encryption",
    desc: "Your passwords and data are fully encrypted."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Secure Login",
    desc: "Multi-factor authentication for extra safety."
  },
  {
    icon: <UserCheck className="w-6 h-6 text-green-600" />,
    title: "Privacy Protected",
    desc: "We never share your personal data with others."
  },
  {
    icon: <KeyRound className="w-6 h-6 text-green-600" />,
    title: "Fast Recovery",
    desc: "Easily recover your account anytime."
  }
];

export default function AuthInfo() {
  return (
    <section className="bg-gray-50 py-12 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Your Security is Our Priority</h2>
          <p className="text-gray-500 mt-2">Shop with confidence using our secure authentication system.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {authFeatures.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-green-50 p-3 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-tight mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}