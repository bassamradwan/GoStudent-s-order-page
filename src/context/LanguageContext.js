import React, { createContext, useState } from 'react';

// إنشاء الـ Context
export const LanguageContext = createContext();

// مزود الـ Context الذي يشارك الحالة
export const LanguageProvider = ({ children }) => {
  // الحالة الافتراضية: اللغة الإنجليزية واتجاه النص من اليسار لليمين
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  // دالة لتغيير اللغة واتجاه النص
//   const toggleLanguage = () => {
//     if (language === 'en') {
//       setLanguage('ar'); // تغيير إلى العربية
//       setDirection('rtl'); // النص من اليمين إلى اليسار
//     } else {
//       setLanguage('en'); // تغيير إلى الإنجليزية
//       setDirection('ltr'); // النص من اليسار إلى اليمين
//     }
//   };

const changeLanguage = (value) => {
    setLanguage(value);
    setDirection(value === 'ar' ? 'rtl' : 'ltr');
  };
  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage,setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
