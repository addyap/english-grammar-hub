// Runs before the React bundle loads so there's no flash of the wrong
// theme. Storage key must match STORAGE_KEY in ThemeProvider.tsx.
(function () {
  var stored = localStorage.getItem("grammatica-theme");
  var isDark =
    stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (isDark) document.documentElement.classList.add("dark");
})();
