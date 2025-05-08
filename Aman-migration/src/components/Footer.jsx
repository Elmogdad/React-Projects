
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white relative z-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">منظمة الهجرة الآمنة</h3>
          <p className="text-sm text-gray-300 mb-4">
            نعمل لحماية ومساعدة المهاجرين وتوفير الدعم والخدمات الإنسانية في جميع أنحاء العالم.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-orange-400" />
              <span>+123456789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-orange-400" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-orange-400" />
              <span>الخرطوم، السودان</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
            <li><a href="#" className="hover:text-white transition">من نحن</a></li>
            <li><a href="#" className="hover:text-white transition">المشاريع</a></li>
            <li><a href="#" className="hover:text-white transition">التقارير</a></li>
            <li><a href="#" className="hover:text-white transition">اتصل بنا</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">مساعدة قانونية</a></li>
            <li><a href="#" className="hover:text-white transition">الرعاية الصحية</a></li>
            <li><a href="#" className="hover:text-white transition">الدعم النفسي</a></li>
            <li><a href="#" className="hover:text-white transition">خدمات التوطين</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="md:flex md:flex-col md:items-end">
          <h4 className="text-lg font-semibold mb-4">تابعنا على</h4>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-400 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-600 py-4 text-center text-sm text-gray-300">
        جميع الحقوق محفوظة © 2025 منظمة الهجرة الآمنة
      </div>
    </footer>
  );
};

export default Footer;
