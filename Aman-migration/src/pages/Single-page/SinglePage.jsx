
const SinglePage = () => {
  return (
<>
<article class="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img src="https://via.placeholder.com/1200x400" alt="صورة المقالة" class="w-full h-64 object-cover"> */}
            <div class="p-6">
                <h2 class="text-3xl font-bold mb-4">تحديات الهجرة غير الشرعية في العصر الحديث</h2>
                <div class="flex items-center text-gray-600 mb-4">
                    <i class="fas fa-user mr-2"></i>
                    <span class="mr-4">بقلم: د. محمد أحمد</span>
                    <i class="fas fa-calendar-alt mr-2"></i>
                    <span>13 سبتمبر 2024</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">تعد الهجرة غير الشرعية من أبرز التحديات التي تواجه المجتمع الدولي في العصر الحديث. فهي ظاهرة معقدة تتداخل فيها عوامل اقتصادية واجتماعية وسياسية وأمنية، وتترك آثارًا عميقة على الدول المصدرة والمستقبلة للمهاجرين على حد سواء.</p>

                    <h3 class="text-2xl font-semibold my-4">الأسباب الرئيسية للهجرة غير الشرعية</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>الفقر والبطالة في الدول المصدرة</li>
                        <li>عدم الاستقرار السياسي والنزاعات المسلحة</li>
                        <li>التغيرات المناخية وتأثيرها على الموارد الطبيعية</li>
                        <li>الفجوة الاقتصادية بين الدول النامية والمتقدمة</li>
                    </ul>

                    <h3 class="text-2xl font-semibold my-4">التحديات التي تواجه الدول المستقبلة</h3>
                    <p class="mb-4">تواجه الدول المستقبلة للمهاجرين غير الشرعيين تحديات متعددة، منها:</p>
                    <ol class="list-decimal list-inside mb-4">
                        <li>الضغط على الخدمات العامة والبنية التحتية</li>
                        <li>التوترات الاجتماعية والثقافية</li>
                        <li>زيادة معدلات الجريمة والاتجار بالبشر</li>
                        <li>التحديات الأمنية المرتبطة بمراقبة الحدود</li>
                    </ol>

                    <h3 class="text-2xl font-semibold my-4">الحلول المقترحة</h3>
                    <p class="mb-4">لمواجهة تحديات الهجرة غير الشرعية، يقترح الخبراء مجموعة من الحلول، منها:</p>
                    <ul class="list-disc list-inside mb-4">
                        <li>تعزيز التعاون الدولي لمعالجة الأسباب الجذرية للهجرة</li>
                        <li>تطوير برامج التنمية المستدامة في الدول المصدرة</li>
                        <li>تحسين آليات الهجرة القانونية وتسهيل إجراءاتها</li>
                        <li>تكثيف الجهود لمكافحة شبكات التهريب والاتجار بالبشر</li>
                    </ul>

                    <p class="mb-4">في الختام، تظل قضية الهجرة غير الشرعية من القضايا المعقدة التي تتطلب تضافر الجهود الدولية والإقليمية لإيجاد حلول مستدامة تراعي حقوق الإنسان وتحقق التوازن بين مصالح الدول المصدرة والمستقبلة.</p>
                </div>
            </div>
        </article>

        <section id="author-bio" class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 class="text-2xl font-semibold mb-4">عن الكاتب</h3>
            <div class="flex items-center">
                {/* <img src="https://via.placeholder.com/100" alt="صورة الكاتب" class="w-20 h-20 rounded-full mr-4"> */}
                <div>
                    <h4 class="text-xl font-semibold">د. محمد أحمد</h4>
                    <p class="text-gray-600">باحث متخصص في قضايا الهجرة والتنمية الدولية، حاصل على دكتوراه في العلوم السياسية من جامعة القاهرة.</p>
                </div>
            </div>
        </section>

        <section id="related-articles" class="mt-8">
            <h3 class="text-2xl font-semibold mb-4">مقالات ذات صلة</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* <img src="https://via.placeholder.com/400x200" alt="صورة المقالة" class="w-full h-40 object-cover"> */}
                    <div class="p-4">
                        <h4 class="text-xl font-bold mb-2">تأثير التغير المناخي على الهجرة</h4>
                        <p class="text-gray-600 mb-2">10 سبتمبر 2024</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المقال <i class="fas fa-arrow-left mr-1"></i></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* <img src="https://via.placeholder.com/400x200" alt="صورة المقالة" class="w-full h-40 object-cover"> */}
                    <div class="p-4">
                        <h4 class="text-xl font-bold mb-2">دور المجتمع المدني في دعم المهاجرين</h4>
                        <p class="text-gray-600 mb-2">5 سبتمبر 2024</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المقال <i class="fas fa-arrow-left mr-1"></i></a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* <img src="https://via.placeholder.com/400x200" alt="صورة المقالة" class="w-full h-40 object-cover"> */}
                    <div class="p-4">
                        <h4 class="text-xl font-bold mb-2">السياسات الأوروبية تجاه الهجرة غير الشرعية</h4>
                        <p class="text-gray-600 mb-2">1 سبتمبر 2024</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800">اقرأ المقال <i class="fas fa-arrow-left mr-1"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="comments" class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 class="text-2xl font-semibold mb-4">التعليقات</h3>
            
            <p class="text-gray-600">نظام التعليقات قيد التطوير. شكرًا لتفهمكم.</p>
        </section> 
        


</>
  )
}

export default SinglePage