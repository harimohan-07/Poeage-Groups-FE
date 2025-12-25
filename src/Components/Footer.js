import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                ◇
              </div>
              <span className="font-semibold text-lg text-gray-900">
                Poeage Group
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Driving innovation across technology, infrastructure,
              and consulting.
            </p>

          </div>

          {/* ABOUT */}
          <div className="grid gap-3 mb-9">
  <h4 className="font-semibold text-gray-900 mb-2">Follow us</h4>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex items-center gap-3 text-gray-500 hover:text-pink-500 transition"
  >
    <FaInstagram size={20} />
    <span className="text-sm">Instagram</span>
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition"
  >
    <FaFacebookF size={20} />
    <span className="text-sm">Facebook</span>
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex items-center gap-3 text-gray-500 hover:text-blue-700 transition"
  >
    <FaLinkedinIn size={20} />
    <span className="text-sm">LinkedIn</span>
  </a>
</div>

          <div className="cursor-pointer">
            <h4 className="font-semibold text-gray-900 mb-4">Companies</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Poeage Technologies</li>
              <li>Poeage Builders</li>
              <li>Poeage Nexus</li>
              <li>Poeage Web Services</li>
              <li>Poeage IT Solutions</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/faq")}>
                FAQ
              </li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/termsandconditions")}>
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/privacypolicy")}>
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/contactus")}
              >
                Contact Us
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 Poeage Group. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
