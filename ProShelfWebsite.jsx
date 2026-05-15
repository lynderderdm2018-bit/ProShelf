export default function ProShelfWebsite() {
  return (
    <div className="min-h-screen bg-[#F3F0E8] text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src="/proshelf-logo.jpg"
            alt="ProShelf Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              <span className="text-[#7AC943]">PRO</span>
              <span className="text-gray-600">SHELF</span>
            </h1>
            <p className="text-xs text-gray-500 tracking-widest">
              THE ENTREPRENEURIAL MIND
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-[#7AC943] transition">About</a>
          <a href="#services" className="hover:text-[#7AC943] transition">Services</a>
          <a href="#features" className="hover:text-[#7AC943] transition">Features</a>
          <a href="#contact" className="hover:text-[#7AC943] transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 md:px-20 py-20 md:py-28 bg-gradient-to-br from-[#F3F0E8] to-white">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-800">
              Empowering Smart
              <span className="text-[#7AC943]"> Business </span>
              Solutions
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              ProShelf helps entrepreneurs build efficient, scalable, and sustainable business systems through innovative management solutions, strategic planning, and modern digital tools.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#7AC943] hover:bg-[#67b22f] text-white px-7 py-3 rounded-2xl shadow-lg transition font-semibold">
                Get Started
              </button>

              <button className="border border-gray-300 hover:border-[#7AC943] hover:text-[#7AC943] px-7 py-3 rounded-2xl transition font-semibold bg-white">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-md">
              <img
                src="/proshelf-hero.jpg"
                alt="ProShelf"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-[#7AC943]">ProShelf</span>
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              ProShelf is a professional business platform designed to support entrepreneurs, startups, and organizations in improving operational efficiency and strategic growth.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to transform entrepreneurial ideas into sustainable success through innovation, organization, and modern business practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#F3F0E8] p-6 rounded-3xl shadow-md">
              <h4 className="text-3xl font-bold text-[#7AC943] mb-2">95%</h4>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>

            <div className="bg-[#F3F0E8] p-6 rounded-3xl shadow-md">
              <h4 className="text-3xl font-bold text-[#7AC943] mb-2">120+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-[#F3F0E8] p-6 rounded-3xl shadow-md">
              <h4 className="text-3xl font-bold text-[#7AC943] mb-2">10+</h4>
              <p className="text-gray-600">Business Partners</p>
            </div>

            <div className="bg-[#F3F0E8] p-6 rounded-3xl shadow-md">
              <h4 className="text-3xl font-bold text-[#7AC943] mb-2">24/7</h4>
              <p className="text-gray-600">Support System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 md:px-20 py-20 bg-[#F7F6F2]">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#7AC943]">Services</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional business solutions tailored for entrepreneurs and growing organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'Business Consulting',
              desc: 'Strategic planning and expert guidance for sustainable business growth.'
            },
            {
              title: 'Digital Solutions',
              desc: 'Modern tools and systems that streamline operations and improve efficiency.'
            },
            {
              title: 'Entrepreneur Training',
              desc: 'Professional development programs for aspiring and established entrepreneurs.'
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7AC943] mb-6"></div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 md:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-5">
            Why Choose <span className="text-[#7AC943]">ProShelf?</span>
          </h3>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            We combine innovation, professionalism, and sustainability to help businesses thrive in a competitive environment.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Professional Expertise',
              'Innovative Solutions',
              'Client-Focused Approach',
              'Sustainable Growth'
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#F3F0E8] p-8 rounded-3xl shadow-md hover:scale-105 transition"
              >
                <h4 className="font-semibold text-lg text-gray-700">
                  {feature}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-20 bg-[#7AC943] text-white text-center">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Build Your Business Success?
        </h3>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
          Partner with ProShelf and transform your entrepreneurial vision into a sustainable and profitable future.
        </p>

        <button className="bg-white text-[#7AC943] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
          Contact Us Today
        </button>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#2F2F2F] text-white px-8 md:px-20 py-14"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">
              <span className="text-[#7AC943]">PRO</span>SHELF
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Professional business solutions for the modern entrepreneur.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Services</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-lg">Business Hours</h5>
            <p className="text-gray-300">Monday – Friday</p>
            <p className="text-gray-300">8:00 AM – 5:00 PM</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2026 ProShelf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
