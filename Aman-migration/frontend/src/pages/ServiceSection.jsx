import React from 'react'
import {  Info, Users, FileText } from 'lucide-react';

function ServiceSection() {
  return (
   <div className="py-16">
     <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-center text-green-700 mb-12">خدماتنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Info className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">التوعية والإرشاد</h4>
                <p className="text-gray-600">نقدم معلومات وإرشادات حول طرق الهجرة القانونية والآمنة</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">الدعم القانوني</h4>
                <p className="text-gray-600">مساعدة قانونية وإرشاد في إجراءات الهجرة الشرعية</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">المساعدة في الوثائق</h4>
                <p className="text-gray-600">المساعدة في تجهيز وتنظيم الوثائق المطلوبة</p>
              </div>
            </div>
          </div>
   </div>
  )
}

export default ServiceSection