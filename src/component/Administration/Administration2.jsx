import React from "react";

const Administration2 = () => {
  const items = [
    {
      title: "Share cases, clients and documents:",
      text: " easily between admins, advisers and clients.",
      img: "/Admin1.svg",
    },
    {
      title: "Task Management:",
      text: " Facilitates creation and completion of tasks between advisers and administrators, enhancing workflow efficiency.",
    },
    {
      title: "Comprehensive Audit Trail:",
      text: " Maintains detailed audit history of all platform activity, ensuring transparency and accountability.",
    },
  ];

  const items2 = [
    {
      title: "Client-Centric:",
      text: " Promotes client engagement by involving them in the process, fostering better communication and trust.",
      img: "/Admin2.svg",
    },
    {
      title: "Robust Reporting:",
      text: " Provides robust reporting capabilities, allowing for data-driven decision-making and performance analysis.",
    },
  ];

  return (
    <div className="space-y-32 mt-16 md:mt-24">
      {/* First Section: Images Left, Content Right */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Left: Images */}
        <div className="md:w-1/2 flex flex-col space-y-4 mx-5">
          {items.map((item, index) =>
            item.img ? (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                className="w-full max-w-md rounded-lg shadow-md"
              />
            ) : null
          )}
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col space-y-4 mx-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-l-4 border-transparent hover:border-blue-500 hover:bg-gray-100 transition"
            >
              <p className="text-sm md:text-base text-gray-800 font-semibold">
                <span className="text-lg md:text-xl">{item.title}</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section: Content Left, Image Right */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Left: Content */}
        <div className="md:w-1/2 flex flex-col space-y-4 mx-5">
          {items2.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-l-4 border-transparent hover:border-blue-500 hover:bg-gray-100 transition"
            >
              <p className="text-sm md:text-base text-gray-800 font-semibold">
                <span className="text-lg md:text-xl">{item.title}</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Images */}
        <div className="md:w-1/2 flex flex-col space-y-4 mx-5">
          {items2.map((item, index) =>
            item.img ? (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                className="w-full max-w-md rounded-lg shadow-md"
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Administration2;
