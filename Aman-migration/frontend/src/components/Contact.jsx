import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can replace this with actual form submission logic
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-10">تواصل معنا</h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-800 mb-12">
          <a href="tel:+123456789" className="flex items-center hover:text-orange-600 transition">
            <Phone className="w-6 h-6 text-orange-500 ml-2" />
            <span>+123456789</span>
          </a>
          <a href="mailto:info@example.com" className="flex items-center hover:text-orange-600 transition">
            <Mail className="w-6 h-6 text-orange-500 ml-2" />
            <span>info@example.com</span>
          </a>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-orange-500 ml-2" />
            <span>العنوان، المدينة</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
          <div>
            <label className="block mb-1 font-medium text-gray-700">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="ادخل اسمك"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="example@email.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">الموضوع</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="موضوع الرسالة"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">رسالتك</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
