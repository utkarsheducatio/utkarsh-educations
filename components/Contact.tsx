export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Utkarsh Education</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading coaching institute in Akola for NEET, JEE & MHT-CET preparation with 20+ years of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white text-sm transition-colors">Courses</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white text-sm transition-colors">Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                Near Krishi Nagar Telephone Exchange,<br />
                Toshnival Layout, Akola, Maharashtra
              </p>
              <a href="tel:9370811902" className="text-blue-400 hover:text-blue-300 font-semibold block">
                📞 9370811902
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/utkarshaeducation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors text-sm"
              >
                f
              </a>
              <a
                href="https://www.youtube.com/@shastrakarsirsutkarsheduca3834"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors text-sm"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Utkarsh Education. All rights reserved. | Designed by Pixels Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
