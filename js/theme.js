// script.js
const themeToggle = document.getElementById('theme-toggle');
const elements = document.getElementsByTagName('*');
const localStorageKey = 'theme';

// Проверяем, есть ли сохраненное значение выбора темы
const savedTheme = localStorage.getItem(localStorageKey);
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggle.addEventListener('click', function() {
  const currentTheme = themeToggle.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(currentTheme);
  
  // Сохраняем выбранную тему в LocalStorage
  localStorage.setItem(localStorageKey, currentTheme);
});

function applyTheme(theme) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('dark', theme === 'dark');
  }
}
