(function() {
  var els = document.querySelectorAll("[id=kv_visitors]");
  els.forEach(function(el) {
    var row = el.closest("[data-counter-slug]");
    var slug = row ? row.getAttribute("data-counter-slug") : window.location.pathname;
    fetch("/api/counter?slug=" + encodeURIComponent(slug), { method: "POST" })
      .then(function(r) { return r.json(); })
      .then(function(d) { el.textContent = d.count; })
      .catch(function() { el.textContent = "-"; });
  });
})();
