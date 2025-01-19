import React from 'react'

const About = () => {
  return (
  <>
  <section id="about" class="mb-12">
            <h2 class="text-2xl font-bold mb-4">عن المركز</h2>
            <p class="text-lg mb-4">مركز الدراسات والأبحاث حول الهجرة غير الشرعية هو مؤسسة بحثية رائدة تهدف إلى فهم وتحليل ظاهرة الهجرة غير الشرعية وتأثيراتها على المجتمعات والاقتصادات العالمية.</p>
            <p class="text-lg">نسعى من خلال أبحاثنا ودراساتنا إلى تقديم رؤى عميقة وحلول مبتكرة لصناع القرار والمنظمات الدولية للتعامل مع تحديات الهجرة غير الشرعية.</p>
        </section>

        <section id="services" class="mb-12">
            <h2 class="text-2xl font-bold mb-4">خدماتنا</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <i class="fas fa-search text-3xl text-red-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">أبحاث ودراسات</h3>
                    <p>نقوم بإجراء أبحاث معمقة حول مختلف جوانب الهجرة غير الشرعية.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <i class="fas fa-chalkboard-teacher text-3xl text-red-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">ورش عمل وندوات</h3>
                    <p>نقدم ورش عمل وندوات للمتخصصين وصناع القرار لمناقشة قضايا الهجرة.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <i class="fas fa-chart-line text-3xl text-red-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">تحليل البيانات</h3>
                    <p>نقوم بتحليل البيانات المتعلقة بالهجرة لاستخراج رؤى قيمة.</p>
                </div>
            </div>
        </section>

        <section id="team" class="mb-12">
            <h2 class="text-2xl font-bold mb-4">فريقنا</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    {/* <img src="https://via.placeholder.com/150" alt="د. أحمد محمود" class="rounded-full mx-auto mb-4"> */}
                    <h3 class="text-xl font-semibold mb-2">د. أحمد محمود</h3>
                    <p>مدير المركز</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    {/* <img src="https://via.placeholder.com/150" alt="د. فاطمة علي" class="rounded-full mx-auto mb-4"> */}
                    <h3 class="text-xl font-semibold mb-2">د. فاطمة علي</h3>
                    <p>رئيسة قسم الأبحاث</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    {/* <img src="https://via.placeholder.com/150" alt="د. محمد حسن" class="rounded-full mx-auto mb-4"> */}
                    <h3 class="text-xl font-semibold mb-2">د. محمد حسن</h3>
                    <p>خبير تحليل البيانات</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    {/* <img src="https://via.placeholder.com/150" alt="د. نورا سعيد" class="rounded-full mx-auto mb-4"> */}
                    <h3 class="text-xl font-semibold mb-2">د. نورا سعيد</h3>
                    <p>منسقة البرامج الدولية</p>
                </div>
            </div>
        </section>

        <section id="contact" class="mb-12">
            <h2 class="text-2xl font-bold mb-4">اتصل بنا</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <form>
                    <div class="mb-4">
                        <label for="name" class="block mb-2">الاسم</label>
                        {/* <input type="text" id="name" name="name" class="w-full p-2 border rounded" required> */}
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-2">البريد الإلكتروني</label>
                        {/* <input type="email" id="email" name="email" class="w-full p-2 border rounded" required> */}
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block mb-2">الرسالة</label>
                        <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea>
                    </div>
                    <button type="submit" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">إرسال</button>
                </form>
            </div>
        </section>
  </>
  )
}

export default About