const MedicalTemplate = () => {
  const doctors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Cardiologist",
      rating: "4.9",
      exp: "12 yrs",
      emoji: "👩‍⚕️",
      available: true,
    },
    {
      name: "Dr. James Patel",
      specialty: "Neurologist",
      rating: "4.8",
      exp: "9 yrs",
      emoji: "👨‍⚕️",
      available: true,
    },
    {
      name: "Dr. Anika Rao",
      specialty: "Pediatrician",
      rating: "5.0",
      exp: "7 yrs",
      emoji: "👩‍⚕️",
      available: false,
    },
  ];

  const services = [
    { icon: "🫀", name: "Cardiology" },
    { icon: "🧠", name: "Neurology" },
    { icon: "🦷", name: "Dentistry" },
    { icon: "👶", name: "Pediatrics" },
    { icon: "🦴", name: "Orthopedics" },
    { icon: "👁️", name: "Ophthalmology" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* NAV */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏥</span>
          <span className="font-extrabold text-lg">
            Medi<span className="text-teal-500">Care</span>
          </span>
        </div>
        <button className="px-4 py-1.5 bg-teal-500 text-white rounded-full text-xs font-bold hover:bg-teal-600 transition">
          Book Appointment
        </button>
      </nav>

      {/* HERO */}
      <section
        className="px-6 py-12 text-center"
        style={{
          background: "linear-gradient(115deg, #f0fdfa 0%, 100%)",
        }}
      >
        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-3">
          🌿 Trusted by 50,000+ Patients
        </span>
        <h1 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">
          Your Health, Our{" "}
          <span className="text-teal-500 dark:text-teal-400">Priority</span>
        </h1>
        <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
          Book appointments with top specialists in minutes. Available 24/7.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button className="px-6 py-2.5 bg-teal-500 text-white font-bold rounded-full text-sm hover:bg-teal-600 transition">
            Book Appointment
          </button>
          <button className="px-6 py-2.5 border border-teal-200 text-teal-600 dark:text-teal-300 font-semibold rounded-full text-sm hover:bg-teal-50 dark:hover:bg-teal-900/30 transition">
            Our Doctors
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {[
            ["200+", "Doctors"],
            ["50k+", "Patients"],
            ["4.9⭐", "Rating"],
            ["24/7", "Support"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="text-lg font-extrabold text-teal-600">{v}</p>
              <p className="text-xs text-gray-500">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-1">Specialties</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Expert care across all medical fields
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-2xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-teal-400 transition cursor-pointer"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="text-xs font-medium mt-1 text-center">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-1">Top Doctors</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Verified specialists, ready to help
        </p>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {doctors.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-teal-400 transition"
            >
              <span className="text-3xl">{d.emoji}</span>
              <div className="flex-1">
                <p className="text-sm font-bold">{d.name}</p>
                <p className="text-xs text-gray-500">
                  {d.specialty} · {d.exp} exp
                </p>
                <p className="text-xs text-yellow-500 mt-0.5">⭐ {d.rating}</p>
              </div>
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  d.available
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                } transition`}
              >
                {d.available ? "Book Now" : "Unavailable"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className="px-4 py-10 bg-teal-50 dark:bg-teal-900/20">
        <h2 className="text-xl font-bold text-center mb-1">
          Book an Appointment
        </h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Quick and easy — takes less than 60 seconds
        </p>
        <div className="max-w-sm mx-auto space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
            <option value="">Select Specialty</option>
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
          <input
            type="date"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="w-full py-2.5 bg-teal-500 text-white font-bold rounded-xl text-sm hover:bg-teal-600 transition">
            Confirm Appointment
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 text-center text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800">
        <p className="font-bold text-sm text-gray-700 dark:text-white mb-1">
          MediCare Health Clinic
        </p>
        <p>Emergency: 📞 1-800-MED-CARE · Available 24/7</p>
        <p className="mt-2">© 2025 MediCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MedicalTemplate;
