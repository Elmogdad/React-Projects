import React from 'react'

const Reseaches = () => {
  return (
 <>
 
 
<h2 class="text-3xl font-bold mb-8">أبحاثنا</h2>
        <p class="text-lg mb-8">نقدم لكم أحدث الأبحاث والدراسات في مجال الهجرة غير الشرعية:</p>

        <div id="research-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 class="text-xl font-bold mb-4">دراسة حول الآثار الاقتصادية للهجرة غير الشرعية</h3>
                <p class="mb-4">تحليل شامل لتأثير الهجرة غير الشرعية على اقتصاديات الدول المستقبلة والمرسلة.</p>
                <a href="#" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 inline-flex items-center">
                    <span>اقرأ المزيد</span>
                    <i class="fas fa-arrow-left mr-2"></i>
                </a>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 class="text-xl font-bold mb-4">تحديات الاندماج الاجتماعي للمهاجرين غير الشرعيين</h3>
                <p class="mb-4">دراسة ميدانية تستكشف الصعوبات التي يواجهها المهاجرون غير الشرعيون في الاندماج بالمجتمعات الجديدة.</p>
                <a href="#" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 inline-flex items-center">
                    <span>اقرأ المزيد</span>
                    <i class="fas fa-arrow-left mr-2"></i>
                </a>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 class="text-xl font-bold mb-4">السياسات الحكومية وتأثيرها على معدلات الهجرة غير الشرعية</h3>
                <p class="mb-4">تحليل مقارن للسياسات المختلفة المتبعة في عدة دول وتأثيرها على حركة الهجرة غير الشرعية.</p>
                <a href="#" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 inline-flex items-center">
                    <span>اقرأ المزيد</span>
                    <i class="fas fa-arrow-left mr-2"></i>
                </a>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 class="text-xl font-bold mb-4">تأثير الهجرة غير الشرعية على الأمن القومي</h3>
                <p class="mb-4">دراسة تحليلية لتداعيات الهجرة غير الشرعية على الأمن القومي للدول المستقبلة وطرق التعامل معها.</p>
                <a href="#" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 inline-flex items-center">
                    <span>اقرأ المزيد</span>
                    <i class="fas fa-arrow-left mr-2"></i>
                </a>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h3 class="text-xl font-bold mb-4">دور المنظمات الدولية في معالجة قضايا الهجرة غير الشرعية</h3>
                <p class="mb-4">تقييم لجهود المنظمات الدولية في التعامل مع تحديات الهجرة غير الشرعية وتأثيرها على السياسات العالمية.</p>
                <a href="#" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 inline-flex items-center">
                    <span>اقرأ المزيد</span>
                    <i class="fas fa-arrow-left mr-2"></i>
                </a>
            </div>
        </div>
        <div class="flex justify-center items-center mt-8">

            <button id="prev-page" class="bg-red-500 text-white ml-4 px-4 py-2 rounded hover:bg-red-600 transition duration-300 mr-4">السابق</button>
            <span id="page-info" class="text-lg font-bold"></span>
            <button id="next-page" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4">التالي</button>
    
        </div>

 </>
  )
}

export default Reseaches