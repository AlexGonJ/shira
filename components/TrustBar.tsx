import React from 'react';

export default function TrustBar() {
  const credentials = [
    {
      title: "Massachusetts Licensed",
      subtitle: "State Certified General Contractor",
      icon: (
        <svg className="w-6 h-6 text-[#F9D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Insurance",
      subtitle: "$2M Liability & Worker's Comp",
      icon: (
        <svg className="w-6 h-6 text-[#F9D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "5.0-Star Google Rating",
      subtitle: "Verified Boston Homeowners",
      icon: (
        <svg className="w-6 h-6 text-[#F9D04F]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      title: "Written Price Guarantee",
      subtitle: "No Hidden Costs or Surprises",
      icon: (
        <svg className="w-6 h-6 text-[#F9D04F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#282626] border-y border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#F9D04F]/40 transition duration-300"
            >
              <div className="flex-shrink-0 p-3 bg-[#1E1D1D] rounded-md border border-white/10">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
