import React, { useContext, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const { language, direction, changeLanguage, setLanguage } = useContext(LanguageContext);
    const handleLanguages = (value) => {
        changeLanguage(value);
        setShowDropdown(false)
      };
  return (
    <>
    <header className="App-header">
    
   <div className="language-select-container">
     <div className="selected-language" onClick={() => setShowDropdown(!showDropdown)}>
       {language === 'ar' ? (
         <img
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
           alt="Arabic"
           style={{ width: '30px', height: '25px' }}
         />
       ) : (
         <img
           src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
           alt="English"
           style={{ width: '30px', height: '25px' }}
         />
       )}
     </div>
     {showDropdown && (
       <div className="dropdown">
         <div className="dropdown-item" onClick={() => handleLanguages('ar')}>
           <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
             alt="Arabic"
             style={{ width: '30px', height: '25px' }}
           />
         </div>
         <div className="dropdown-item" onClick={() => handleLanguages('en')}>
           <img
             src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
             alt="English"
             style={{ width: '30px', height: '25px' }}
           />
         </div>
       </div>
     )}
   </div>
   <span>All advantages</span>
 </header>
    </>
  
   )
}
