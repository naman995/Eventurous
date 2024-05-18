export default function EventPrograms() {
  const industries = [
    "IT Managed Services",
    "HealthTech",
    "BFSI",
    "Cybersecurity",
    "Wireless Service",
    "Education & Training",
    "OEM",
    "Software-as-a-service (SaaS)",
    "IT Staffing",
    "F&B",
    "Telecommunications",
    "Construction",
    "Pharma",
    "Cloud Service Providers",
    "Automotive",
    "Chemicals",
    "IT Consulting Services",
    "Business Consulting Services",
    "Logistics & Manufacturing",
    "ERP & Cloud Suites",
    "Media & Entertainment",
    "Travel & Tourism",
    "IoT",
    "FMCG",
  ];

  return (
    <div className="bg-[#003d5b] text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Building Branded, Scalable Event Programs{" "}
          <span className="text-yellow-400">Across Industries</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white text-gray-700 font-extrabold p-4 rounded shadow text-center transition duration-300 ease-in-out"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
