
import galleryImage from '../assets/gallery.jpeg'; // Adjust the path to your image


const images = [
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },
  { src: galleryImage, alt: 'مشروع 1' },

   
  
];

const Gallery = () => {
  return (
    <section className="py-16 bg-green-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">معرض الصور</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            استعرض أبرز لحظاتنا وإنجازاتنا في العمل الإنساني والمجتمعي
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-sm">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-700 mb-4">هل ترغب في معرفة المزيد؟</h3>
            <p className="text-gray-600 mb-6">
              تواصل معنا للحصول على مزيد من المعلومات حول مشاريعنا وأنشطتنا في المجتمع.
            </p>
            <a href='/contact' className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
