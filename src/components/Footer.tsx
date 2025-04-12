import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Car, Users, Wrench, Image, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold font-display">Clean Spec Automotive</span>
            </div>
            <p className="text-white/70 mb-4">
              Premium automotive detailing services for those who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <Wrench className="w-4 h-4" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <Image className="w-4 h-4" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">CONTACT INFO</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+919003129998" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>9003129998</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/PqQYyuBiGCzKXbTv5" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai, Tamil Nadu</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">CONNECT WITH US</h3>
            <div className="flex space-x-4">
              <a
                href="tel:+919003129998"
                className="bg-accent hover:bg-accent-light p-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/cleanspec"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light p-3 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/+919003129998"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light p-3 rounded-lg transition-colors"
              >
                {/* WhatsApp SVG Icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  className="fill-primary"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/PqQYyuBiGCzKXbTv5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light p-3 rounded-lg transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} Clean Spec Automotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;