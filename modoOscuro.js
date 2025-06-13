// modoOscuro.js
$(function(){
  const body     = $('body');
  const $luna    = $('#icon-luna');
  const $sol     = $('#icon-sol');
  const toggle   = $('#themeToggle');

  // Aplica el tema recibido ('dark' o 'light')
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.addClass('dark-mode');
      $luna.hide();
      $sol.show();
    } else {
      body.removeClass('dark-mode');
      $luna.show();
      $sol.hide();
    }
  }

  // 1. Lo primero al cargar: leemos localStorage o fallback a prefers-color-scheme
  let theme = localStorage.getItem('theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  applyTheme(theme);

  // 2. Cuando clickeás el toggle, alternás y guardás
  toggle.on('click', function(){
    theme = body.hasClass('dark-mode') ? 'light' : 'dark';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  });
});
