import { Shield, Building2, FileText } from "lucide-react";

const features = [
  {
    title: "Verify customer identification",
    desc: "Ensure security by verifying IDs, protecting against fraud and unauthorised access.",
    icon: <Shield className="w-12 h-12 mb-4 text-white" strokeWidth={1.5} />,
    img: "/HomeBuyergif.gif", // Phone mockup or relevant GIF
  },
  {
    title: "Share bank account info",
    desc: "Users can easily initiate Open Banking within the app, securely connecting their financial accounts for streamlined data access.",
    icon: <Building2 className="w-12 h-12 mb-4 text-white" strokeWidth={1.5} />,
    img: "/HomeBuyergif2.gif",
  },
  {
    title: "Provide a credit report",
    desc: "Take advantage of Open Banking and access credit reports easily.",
    icon: <FileText className="w-12 h-12 mb-4 text-white" strokeWidth={1.5} />,
    img: "/HomeBuyergif3.gif",
  },
];

const Homebuyer3 = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="text-center  mb-16">
        <p className="text-2xl font-lora md:text-3xl font-light text-gray-800 max-w-4xl mx-auto leading-tight">
          <span className="font-bold">Easy verification</span> of information in-app.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-8 text-white relative overflow-hidden hover:scale-105 transition-transform shadow-lg"
          >
            {/* Icon + Title + Description */}
            <div className="relative z-10 mb-6">
              <div>{feature.icon}</div>
              <p className="text-2xl font-semibold font-lora mb-2">{feature.title}</p>
              <p className="text-white font-robote leading-relaxed">{feature.desc}</p>
            </div>

            {/* Phone Mockup / GIF */}
            <div className="relative mx-auto w-48 h-96 mt-8">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homebuyer3;
