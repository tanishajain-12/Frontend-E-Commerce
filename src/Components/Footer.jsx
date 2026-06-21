import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white px-10 py-8 mt-10">

      {/* Top Section */}
      <div className="flex justify-between mb-8">

        {/* Logo and tagline */}
        <div>
          <h2 className="text-yellow-400 font-black text-2xl mb-2">blinkit</h2>
          <p className="text-gray-400 text-sm">Delivery in 10 minutes</p>
        </div>

        {/* Links - Useful Links */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Useful Links</h3>
          <div className="flex flex-col gap-2">
            <button className="text-gray-400 text-sm text-left hover:text-white">Home</button>
            <button className="text-gray-400 text-sm text-left hover:text-white">About Us</button>
            <button className="text-gray-400 text-sm text-left hover:text-white">Careers</button>
          </div>
        </div>

        {/* Links - Categories */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Categories</h3>
          <div className="flex flex-col gap-2">
            <button className="text-gray-400 text-sm text-left hover:text-white">Vegetables</button>
            <button className="text-gray-400 text-sm text-left hover:text-white">Dairy</button>
            <button className="text-gray-400 text-sm text-left hover:text-white">Snacks</button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">support@blinkit.com</p>
            <p className="text-gray-400 text-sm">1800-XXX-XXXX</p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-xs text-center">
          © 2024 Blinkit. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer