(function() {
  var el = document.getElementById("kv_visitors");
  if (!el) return;
  var slug = window.location.pathname;
  fetch("/api/counter?slug=" + encodeURIComponent(slug), { method: "POST" })
    .then(function(r) { return r.json(); })
    .then(function(d) { el.textContent = d.count; })
    .catch(function() { el.textContent = "-"; });
})();
