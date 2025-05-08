import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold">منظمة الهجرة الآمنة</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link to="/" className="px-3 py-2 hover:bg-green-600 rounded">الرئيسية</Link>
            <Link to="/about" className="px-3 py-2 hover:bg-green-600 rounded">من نحن</Link>
            <Link to="/services" className="px-3 py-2 hover:bg-green-600 rounded">خدماتنا</Link>
            <Link to="/contact" className="px-3 py-2 hover:bg-green-600 rounded">اتصل بنا</Link>
            <Link to="/login" className="px-3 py-2 hover:bg-green-600 rounded border border-white">تسجيل الدخول</Link>
            <Link to="/register" className="px-3 py-2 bg-white text-green-700 hover:bg-gray-100 rounded">تسجيل</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-right">
          <Link to="/" className="block px-3 py-2 hover:bg-green-600 rounded">الرئيسية</Link>
          <Link to="/about" className="block px-3 py-2 hover:bg-green-600 rounded">من نحن</Link>
          <Link to="/services" className="block px-3 py-2 hover:bg-green-600 rounded">خدماتنا</Link>
          <Link to="/contact" className="block px-3 py-2 hover:bg-green-600 rounded">اتصل بنا</Link>
          <Link to="/login" className="block px-3 py-2 hover:bg-green-600 rounded border border-white">تسجيل الدخول</Link>
          <Link to="/register" className="block px-3 py-2 bg-white text-green-700 hover:bg-gray-100 rounded">تسجيل</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
