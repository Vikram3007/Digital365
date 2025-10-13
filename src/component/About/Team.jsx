import React from "react";
import Footer from "../Footer";

const teamMembers = [
  {
    name: "Conor Murphy",
    role: "Founder & CEO",
    image: "/team1.jpg",
    description:
      "Conor Murphy is the founder and CEO of Smart365, the UK's largest B2B SaaS platform for mortgage intermediaries, capturing 25% of the market share since 2017. The platform integrates 65% of UK lenders and is backed by FTSE 100 companies like Legal & General and Experian. As CEO of Capricorn Financial Consultancy, London's largest independent mortgage brokerage, Conor manages £2.5 billion in lending and oversees operations in Dubai, Singapore, Hong Kong, and Shanghai.",
  },
  {
    name: "Bryan Kidd",
    role: "Managing Director",
    image: "/team2.jpg",
    description:
      "Bryan Kidd has been at Smartr365 since March 2023 driving operational efficiency and business growth. With over 20 years of experience, Bryan has held key roles at Legal & General, Co-op Insurance, and IBM, specialising in digital transformation, business development, and agile implementation. His expertise spans managing large-scale financial and IT programs, leading teams, and delivering impactful solutions across the mortgage, insurance and financial sectors. Based in Leeds, Bryan’s strategic leadership continues to shape Smartr365’s future in the FinTech landscape.",

  },
  {
    name: "Damon Macklin",
    role: "Chief Product Officer",
    image: "/team3.png",
    description:"With over 15 years of experience in technology across Product and UX, Damon has built and scaled digital products across early stage startups and established companies, including Google, SalaryFinance, and MoneySuperMarket, always with a strong focus on understanding and meeting real customer needs. He has delivered blockchain based payments, cross border transaction systems, and solutions that navigate complex regulatory jurisdictions, all while championing user research, UX best practices and usability testing. At Smartr365, Damon leads the product vision to deliver outstanding, high impact experiences for brokers and homebuyers.",
  
  },
  {
    name: "Luke Murphy",
    role: "Chief Information Officer",
    image: "/team4.jpg",
    description:"Luke has over 20 years of experience in IT management, specialising in IT service management, operations, infrastructure, and security. He brings a wealth of expertise to Smartr365, with in-depth knowledge of information security frameworks, data structures, and cloud infrastructure, ensuring robust and scalable solutions. Before joining Smartr365, Luke held senior leadership roles, including Head of Platform Operations at Drivvn, where he led service management and platform operations initiatives, delivering scalable, efficient, and reliable services. His proven leadership in IT security and operations is crucial to ensuring seamless infrastructure management, robust security, and operational excellence at Smartr365."
  },
  {
    name: "Jens Lauridsen",
    role: "Chief Revenue Officer",
    image: "/Team5.jpg",
    description:"Jens joined Smartr365 in July 2025. Jens is an accomplished software sales leader with over 20 years of software sales experience and more than a decade of sales management experience. After having started his career at IBM, Jens has served as VP of Sales at several SaaS companies including at Zimbra, Act-On Software, Monetate and Lifesize. Jens heads up both sales and customer success and manages the partnerships that Smartr365 has established with major mortgage networks, clubs and lenders.",
  },
  {
    name: "Carel Stassen",
    role: "Chief Financial Officer",
    image: "/team5.jpg",
    description:"Carel has spent most of his career in finance and fintech.  He has in led both successful exits and fundraisings, securing transformative investments for global firms. Carel drove financial strategy for multiple global commercial finance technology providers and led reporting and compliance at an FTSE-listed challenger bank.  The bulk of his career was spent at a Big Four firm in audit and consulting, with specialising in acquisitions and financial instruments. Carel is a Chartered Accountant (SAICA and ICAEW) with multiple degrees in Accounting and Finance, and an Executive MBA from Warwick Business School.",
  },
  {
    name: "Jonathan Lawn",
    role: "Head of Engineering",
    image: "/team6.jpg",
    description:"Jonathan joined Smartr365 in August 2025, after four years at Microsoft, where he held a key role in delivering enterprise-scale solutions. He brings nearly three decades of software engineering experience, covering both deep technical expertise and senior leadership roles across fast-paced, highly regulated industries such as telecommunications. Though new to financial services, Jonathan is deeply experienced in building secure, scalable technology for enterprise clients with complex requirements. At Smartr365, he leads our engineering function with a focus on continuous improvement, ensuring the team delivers high-quality, user-driven functionality with efficiency, agility and technical precision.",
  },
  {
    name: "Carl Neale",
    role: "Head of Sales",
    image: "/team8.jpg",
    description:"Carl began his journey at Smartr365 as a junior sales executive and quickly rose through the ranks to become Head of Sales. With over 6 years of experience in SAAS sales, Carl has played a key role in building and scaling Smartr365’s sales team from the ground up. As he transitioned into a leadership role, Carl has been instrumental in managing high-performing teams and guiding Smartr365 to its current success. We have no doubt that his commitment to understanding client needs and delivering tailored solutions has helped the company expand its user base and achieve significant revenue milestones.",
  },
  {
    name: "Shaheena Ali",
    role: "Operations & Compliance Manager",
    image: "/team9.jpg",
    description:"Shaheena Ali has been with Smartr365 since November 2020 and serves as our Operations and Compliance Manager. She excels in streamlining operational processes and driving continuous improvement. As part of the ISMS committee, Shaheena oversees information security standards and manages compliance with ISO27001 and GDPR. Her responsibilities include handling legal contracts, managing HR functions, and ensuring third-party vendor compliance. Shaheena’s focus on operational excellence is key to Smartr365’s success.",
  },
];

const Team = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20">
          <div className="flex-1 space-y-6 text-center md:text-left text-white">
            <p className="font-serif text-sm md:text-base tracking-wide uppercase">Smart365™</p>
            <h2 className="font-sans text-3xl md:text-5xl font-bold">Our Team</h2>
            <p className="font-medium text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Meet the leadership team driving innovation in the mortgage and financial services industry.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-20 space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white  rounded-2xl p-8"
            >
              {/* Image + Name/Role */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-4 tracking-wide">{member.name}</h3>
                <p className="text-blue-600 font-medium italic">{member.role}</p>
              </div>

              {/* Description */}
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed mt-5 text-base">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
