import React, { useEffect } from 'react';

const GoogleT = () => {

    useEffect(() => {
      function googleTranslateElementInit() {
        google.translate.TranslateElement({ 
          pageLanguage: 'en', // Set the default language of your website
          autoDisplay: false 
        }, 'google_translate_element');
      }
      
          // Load the Google Translate API script
          const script = document.createElement('script');
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          document.body.appendChild(script);
          googleTranslateElementInit()
      }, []);
    
  return (
    <div id="google_translate_element"></div>
  )
}

export default GoogleT