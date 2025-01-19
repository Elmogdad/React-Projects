import React from 'react'

const Resources = () => {
  return (
<>

<h2 class="text-3xl font-bold mb-8">الموارد</h2>

<section id="reports" class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">التقارير والدراسات</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-2">تقرير الهجرة العالمي 2024</h4>
            <p class="mb-4">نظرة شاملة على اتجاهات الهجرة العالمية وتحدياتها.</p>
            <a href="#" class="text-red-600 hover:text-red-800">تحميل PDF <i class="fas fa-download mr-1"></i></a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-2">دراسة: أثر الهجرة غير الشرعية على الاقتصاد</h4>
            <p class="mb-4">تحليل معمق لتأثيرات الهجرة غير الشرعية على اقتصادات الدول المضيفة.</p>
            <a href="#" class="text-red-600 hover:text-red-800">قراءة الدراسة <i class="fas fa-external-link-alt mr-1"></i></a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-2">تقرير: حقوق المهاجرين غير الشرعيين</h4>
            <p class="mb-4">استعراض للتحديات القانونية والإنسانية التي يواجهها المهاجرون غير الشرعيين.</p>
            <a href="#" class="text-red-600 hover:text-red-800">تحميل PDF <i class="fas fa-download mr-1"></i></a>
        </div>
    </div>
</section>

<section id="statistics" class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">الإحصائيات والبيانات</h3>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h4 class="text-xl font-bold mb-4">إحصائيات الهجرة غير الشرعية لعام 2023</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
                <p class="text-4xl font-bold text-red-600">2.5 مليون</p>
                <p>عدد المهاجرين غير الشرعيين</p>
            </div>
            <div class="text-center">
                <p class="text-4xl font-bold text-red-600">45%</p>
                <p>نسبة الزيادة عن العام السابق</p>
            </div>
            <div class="text-center">
                <p class="text-4xl font-bold text-red-600">120</p>
                <p>عدد الدول المتأثرة</p>
            </div>
        </div>
    </div>
</section>

<section id="useful-links" class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">روابط مفيدة</h3>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <ul class="space-y-2">
            <li><a href="#" class="text-blue-600 hover:text-blue-800"><i class="fas fa-link mr-2"></i>المنظمة الدولية للهجرة</a></li>
            <li><a href="#" class="text-blue-600 hover:text-blue-800"><i class="fas fa-link mr-2"></i>مفوضية الأمم المتحدة لشؤون اللاجئين</a></li>
            <li><a href="#" class="text-blue-600 hover:text-blue-800"><i class="fas fa-link mr-2"></i>منظمة العمل الدولية - قسم هجرة العمالة</a></li>
            <li><a href="#" class="text-blue-600 hover:text-blue-800"><i class="fas fa-link mr-2"></i>مركز دراسات الهجرة - جامعة أكسفورد</a></li>
        </ul>
    </div>
</section>

<section id="multimedia" class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">الوسائط المتعددة</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-2">فيديو توعوي: مخاطر الهجرة غير الشرعية</h4>
            <div class="aspect-w-16 aspect-h-9">
                <div class="w-full h-0 pb-[56.25%] relative bg-gray-200">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <i class="fas fa-play-circle text-6xl text-gray-400"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-bold mb-2">بودكاست: قصص من واقع المهاجرين</h4>
            <div class="bg-gray-200 p-4 rounded-lg">
                <i class="fas fa-podcast text-4xl text-gray-600 mb-2"></i>
                <p>استمع إلى تجارب حقيقية للمهاجرين وقصصهم الملهمة.</p>
                <a href="#" class="text-red-600 hover:text-red-800">استمع الآن <i class="fas fa-headphones mr-1"></i></a>
            </div>
        </div>
    </div>
</section>

</>
  )
}

export default Resources