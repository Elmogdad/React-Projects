import React from 'react'

const News = () => {
  return (
  <>

  <h2 class="text-3xl font-bold mb-8">آخر الأخبار والتحديثات</h2>

<section id="featured-news" class="mb-12">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <img src="https://via.placeholder.com/800x400" alt="صورة الخبر الرئيسي" class="w-full h-64 object-cover"> */}
        <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">مؤتمر دولي يناقش حلول الهجرة غير الشرعية</h3>
            <p class="text-gray-600 mb-4">13 سبتمبر 2024</p>
            <p class="mb-4">انعقد اليوم مؤتمر دولي في جنيف لمناقشة الحلول المستدامة لمشكلة الهجرة غير الشرعية، بمشاركة ممثلين من أكثر من 50 دولة.</p>
            <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
        </div>
    </div>
</section>

<section id="news-list" class="mb-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img src="https://via.placeholder.com/400x200" alt="صورة الخبر" class="w-full h-40 object-cover"> */}
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">إطلاق مبادرة جديدة لدعم المهاجرين</h3>
                <p class="text-gray-600 mb-2">10 سبتمبر 2024</p>
                <p class="mb-4">أعلنت منظمة دولية عن إطلاق مبادرة جديدة تهدف إلى توفير الدعم القانوني والنفسي للمهاجرين غير الشرعيين.</p>
                <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img src="https://via.placeholder.com/400x200" alt="صورة الخبر" class="w-full h-40 object-cover"> */}
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">دراسة: تزايد أعداد المهاجرين بسبب التغير المناخي</h3>
                <p class="text-gray-600 mb-2">5 سبتمبر 2024</p>
                <p class="mb-4">كشفت دراسة حديثة عن ارتباط وثيق بين التغيرات المناخية وزيادة معدلات الهجرة غير الشرعية في بعض المناطق.</p>
                <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img src="https://via.placeholder.com/400x200" alt="صورة الخبر" class="w-full h-40 object-cover"> */}
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">تعاون دولي لمكافحة شبكات تهريب البشر</h3>
                <p class="text-gray-600 mb-2">1 سبتمبر 2024</p>
                <p class="mb-4">أعلنت عدة دول عن تشكيل فرقة عمل مشتركة لمكافحة شبكات تهريب البشر وحماية ضحايا الاتجار بالبشر.</p>
                <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المزيد <i class="fas fa-arrow-left mr-1"></i></a>
            </div>
        </div>
    </div>
</section>

<section id="news-categories" class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">تصفح الأخبار حسب الفئة</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="#" class="bg-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition duration-300">سياسات الهجرة</a>
        <a href="#" class="bg-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition duration-300">قصص المهاجرين</a>
        <a href="#" class="bg-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition duration-300">الأبحاث والدراسات</a>
        <a href="#" class="bg-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition duration-300">المبادرات الدولية</a>
    </div>
</section>

<section id="newsletter" class="mb-12">
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold mb-4">اشترك في نشرتنا الإخبارية</h3>
        <p class="mb-4">احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني.</p>
        <form class="flex flex-col md:flex-row gap-4">
            {/* <input type="email" placeholder="أدخل بريدك الإلكتروني" class="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"> */}
            <button type="submit" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">اشترك</button>
        </form>
    </div>
</section>

  </>
  )
}

export default News