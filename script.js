// ===== Theme (dark / light) =====
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("akt-theme", theme); } catch (_) {}
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("akt-theme"); } catch (_) {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
})();

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ===== Active nav link on scroll =====
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...nav.querySelectorAll("a")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + id)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((s) => observer.observe(s));

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== WhatsApp contact form =====
const waForm = document.getElementById("waForm");
if (waForm) {
  waForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameEl = document.getElementById("wfName");
    const phoneEl = document.getElementById("wfPhone");
    const msgEl = document.getElementById("wfMsg");
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const msg = msgEl.value.trim();

    if (!name) { nameEl.focus(); return; }
    if (!msg) { msgEl.focus(); return; }

    const lines = ["Hello Ajendra, this is " + name + "."];
    if (phone) lines.push("My phone: " + phone);
    lines.push("", msg);

    const url = "https://wa.me/919691888860?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
}

// ===== Back to top =====
const toTop = document.getElementById("toTop");
if (toTop) {
  const syncToTop = () => toTop.classList.toggle("show", window.scrollY > 500);
  window.addEventListener("scroll", syncToTop, { passive: true });
  syncToTop();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
