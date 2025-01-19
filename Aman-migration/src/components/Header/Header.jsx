import React from 'react'

const Header = () => {
  return (
<>

<header class="bg-gray-800 text-white z-50 fixed w-full top-0 left-0">
    <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            {/* <!-- Logo and title --> */}
            <h1 class="text-xl font-bold"><span class="text-red-500">مركز</span> الدراسات والأبحاث حول الهجرة غير الشرعية</h1>

            {/* <!-- Toggle Button for mobile view --> */}
            <button id="menu-toggle" class="block lg:hidden text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* <!-- Desktop Navigation Menu --> */}
            <nav class="hidden lg:flex space-x-4">
                <ul class="flex space-x-4">
                    <li><a href="index.html" class="text-red-500 ml-4 text-sm font-bold">الرئيسية</a></li>
                    <li><a href="about.html" class="hover:text-red-500 transition text-sm duration-300">عن المركز</a></li>
                    <li><a href="contact.html" class="hover:text-red-500 transition text-sm duration-300">الدورات التدريبية</a></li>
                    <li><a href="resources.html" class="hover:text-red-500 transition text-sm duration-300">الموارد</a></li>
                    <li><a href="research.html" class="hover:text-red-500 transition text-sm duration-300">الدراسات و البحوث</a></li>
                    <li><a href="news.html" class="hover:text-red-500 transition text-sm duration-300">التوعية والاعلام</a></li>
                    <li><a href="login.html" class="hover:text-red-500 transition text-sm duration-300">تسجيل دخول</a></li>
                </ul>
            </nav>
        </div>
    </div>

    {/* <!-- Mobile Navigation Menu --> */}
    <nav id="mobile-menu" class="xs:hidden fixed inset-0 bg-gray-800 text-white transform -translate-x-full transition-transform duration-300 ease-in-out">
        <div class="container mx-auto px-4 py-6">
            <button id="close-menu" class="text-white text-2xl absolute top-4 right-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul class="flex flex-col space-y-4 mt-8">
                <li><a href="index.html" class="text-red-500 text-sm font-bold">الرئيسية</a></li>
                <li><a href="about.html" class="hover:text-red-500 transition text-sm duration-300">عن المركز</a></li>
                <li><a href="contact.html" class="hover:text-red-500 transition text-sm duration-300">الدورات التدريبية</a></li>
                <li><a href="resources.html" class="hover:text-red-500 transition text-sm duration-300">الموارد</a></li>
                <li><a href="research.html" class="hover:text-red-500 transition text-sm duration-300">الدراسات و البحوث</a></li>
                <li><a href="news.html" class="hover:text-red-500 transition text-sm duration-300">التوعية والاعلام</a></li>
                <li><a href="login.html" class="hover:text-red-500 transition text-sm duration-300">تسجيل دخول</a></li>
            </ul>
        </div>
    </nav>
</header>

</>
  )
}

export default Header