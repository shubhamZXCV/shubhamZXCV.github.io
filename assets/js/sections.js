// The home view shows the first few items of each section. Going to #<section-id>
// (via "View more" or the sidebar menu) shows only that section, in full.
(function () {
  var sections = document.querySelectorAll('[data-section]');
  var navLinks = document.querySelectorAll('.side-nav a');

  function render() {
    var id = decodeURIComponent(location.hash.slice(1));
    var active = null;
    sections.forEach(function (s) {
      if (s.getAttribute('data-section') === id) active = s;
    });

    document.documentElement.classList.toggle('section-view', !!active);
    sections.forEach(function (s) { s.classList.toggle('active', s === active); });
    navLinks.forEach(function (a) {
      a.classList.toggle('current', a.getAttribute('href') === (active ? '#' + id : '#'));
    });

    // A hash that isn't a section (e.g. a heading anchor) scrolls to that element as usual
    var anchor = !active && id && document.getElementById(id);
    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  render();
})();
