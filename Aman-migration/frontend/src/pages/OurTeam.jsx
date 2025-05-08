
import { Linkedin, Twitter, Globe } from 'lucide-react';
import belalImage from '../assets/belel.jpeg'; // Adjust the path to your image


const OurTeam = () => {
  const teamMembers = [
    {
        name: "د. بلال ميرغني يوسف ",
        role: " المدير التنفيذي ",
        description: "اخصائي في تنفيذ برامج الهجرة",
        image: belalImage,
        socialLinks: {
          linkedin: "#",
          twitter: "#",
          website: "#"
      }
    },
    {
        name: "د. بلال ميرغني يوسف ",
      role: " المدير التنفيذي ",
      description: "اخصائي في تنفيذ برامج الهجرة",
      image: belalImage,
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
        name: "د. بلال ميرغني يوسف ",
        role: " المدير التنفيذي ",
        description: "اخصائي في تنفيذ برامج الهجرة",
        image: belalImage,
        socialLinks: {
          linkedin: "#",
          twitter: "#",
          website: "#"
      }
    },
    {
      name: "د. بلال ميرغني يوسف ",
      role: " المدير التنفيذي ",
      description: "اخصائي في تنفيذ برامج الهجرة",
      image: belalImage,
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <section className="py-16 bg-green-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">فريقنا المتميز</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            يضم فريقنا نخبة من الخبراء والمتخصصين في مجالات الهجرة والقانون والعمل الإنساني.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1 rounded-3xl"
            >
              <img
                src={member.image}
                alt={`صورة ${member.name}`}
                className="w-full h-ب object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-2 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.socialLinks.linkedin} aria-label="LinkedIn" className="hover:text-green-700 text-gray-500">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socialLinks.twitter} aria-label="Twitter" className="hover:text-green-700 text-gray-500">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socialLinks.website} aria-label="Website" className="hover:text-green-700 text-gray-500">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-700 mb-4 ">انضم إلى فريقنا</h3>
            <p className="text-gray-600 mb-6">
              نحن دائماً نبحث عن أشخاص موهوبين وملتزمين للانضمام إلى فريقنا. إذا كنت تشاركنا رؤيتنا، نرحب بانضمامك.
            </p>
            <a href='/contact' className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 hover:scale-105 transition duration-300">
              تقدم للانضمام
            </a >
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
