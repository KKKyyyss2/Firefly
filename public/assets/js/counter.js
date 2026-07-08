(function() {
  var els = document.querySelectorAll(".kv-visitors");
  els.forEach(function(el) {
    var row = el.closest("[data-path]");
    var slug = row ? row.getAttribute("data-path") : "";
    if (!slug) return;
    fetch("/api/counter?slug=" + encodeURIComponent(slug), { method: "POST" })
      .then(function(r) { return r.json(); })
      .then(function(d) { el.textContent = d.count; })
      .catch(function() { el.textContent = "-"; });
  });
})();
