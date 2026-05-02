function aboutMod() {
    document.body.classList.toggle('light');
  /* عشان احفظ ال theme اللي المستخدم قفل عليها عشان لما يجي يفتح الموقع تاني يلاقي نفس ال themeاللي قفل عليها*/ 
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}