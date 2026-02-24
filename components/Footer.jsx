import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold font-heading">NexaHome</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting homeowners with trusted home service experts.
            </p>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "How It Works", "Features", "Contact Us"],
            },
            {
              title: "Services",
              links: ["Electrician", "Plumbing", "HVAC", "Landscaping", "Cleaning"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NexaHome. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
