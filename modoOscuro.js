$(document).ready(function () {
  $('#toggle-theme').click(function () {
    $('body').toggleClass('dark-mode light-mode');
    let isDark = $('body').hasClass('dark-mode');

    $('#theme-icon')
      .removeClass('bi-brightness-high bi-moon-stars')
      .addClass(isDark ? 'bi-moon-stars' : 'bi-brightness-high');
  });

  // Establece modo claro por defecto
  $('body').addClass('light-mode');
});