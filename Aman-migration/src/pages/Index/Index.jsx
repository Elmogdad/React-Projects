import React from 'react'

const Index = () => {
  return (
   <>
     <div className="mt-10">
    
    </div>
   <section class="bg-white rounded-lg shadow-lg  p-8 mb-8">
            <h2 class="text-3xl xs:text-red-300 font-bold mb-4">مرحباً بكم في مركز أبحاث الهجرة غير الشرعية</h2>
            <p class="text-lg mb-6">نحن نعمل على دراسة وتحليل قضايا الهجرة غير الشرعية لتقديم حلول فعالة ومستدامة.</p>
            <a href="about.html" class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">اعرف المزيد</a>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
                <i class="fas fa-search text-4xl text-red-500 mb-4"></i>
                <h3 class="text-xl font-bold mb-2">أبحاثنا</h3>
                <p>نقوم بإجراء أبحاث معمقة حول قضايا الهجرة غير الشرعية.</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
                <i class="fas fa-users text-4xl text-red-500 mb-4"></i>
                <h3 class="text-xl font-bold mb-2">مجتمعنا</h3>
                <p>نعمل مع شبكة واسعة من الباحثين والمنظمات في جميع أنحاء العالم.</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
                <i class="fas fa-book text-4xl text-red-500 mb-4"></i>
                <h3 class="text-xl font-bold mb-2">مواردنا</h3>
                <p>نوفر مجموعة واسعة من الموارد والمنشورات حول الهجرة غير الشرعية.</p>
            </div>
</section>
   </>
  )
}

export default Index