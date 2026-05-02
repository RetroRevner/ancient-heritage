function aboutMod() {
    // تبديل كلاس light على الـ body فقط
    document.body.classList.toggle('light');
    
    // حفظ الوضع في المتصفح   
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// دالة changeMod إذا كانت موجودة في ملف آخر، تأكدي أنها لا تعارض aboutMod