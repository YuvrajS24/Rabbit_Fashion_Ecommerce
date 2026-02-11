import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t bg-gray-50">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* NEWSLETTER */}
          <div className="flex flex-col lg:pr-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Newsletter
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Be the first to hear about new products, exclusive events,
              and online offers.
            </p>

            <p className="font-medium text-sm text-gray-600 mb-6">
              Sign up and get 10% off your first order.
            </p>

         <form className="flex max-w-xs w-full">
  <input
    type="email"
    placeholder="Enter your email"
    required
    className="w-0 flex-1 px-3 py-2.5 text-sm border border-gray-300 rounded-l-md
               focus:outline-none focus:ring-2 focus:ring-black"
  />
  <button
    type="submit"
    className="bg-black text-white px-4 py-2.5 text-sm rounded-r-md
               hover:bg-gray-800 transition"
  >
    Subscribe
  </button>
</form>

          </div>

          {/* SHOP */}
          <div className="flex flex-col lg:pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link to="#" className="hover:text-black transition">
                  Men's Top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  Women's Top Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  Men's Bottom Wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  Women's Bottom Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="flex flex-col lg:pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link to="#" className="hover:text-black transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="flex flex-col lg:pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>

            <div className="flex items-center space-x-5 mb-6 text-gray-600">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <TbBrandMeta size={20} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <IoLogoInstagram size={20} />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <RiTwitterXLine size={18} />
              </a>
            </div>

            <p className="text-gray-500 text-sm mb-1">Call Us</p>

            <p className="flex items-center text-sm text-gray-700">
              <FiPhoneCall className="mr-2" />
              0123-456-789
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy;2026 - Yuvraj Sachdev, All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
