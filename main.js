function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById('themeToggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '☀️ Light';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.innerHTML = '🌙 Dark';
    localStorage.setItem('darkMode', 'disabled');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  const toggleButton = document.getElementById('themeToggle');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = '☀️ Light';
  }
});
