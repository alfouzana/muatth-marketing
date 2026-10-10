import "./style.css";

// WhatsApp booking links
const WA = "https://wa.me/966558881449?text=" + encodeURIComponent("السلام عليكم، أبي أحجز استشارة تسويقية");
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = WA;
  a.target = "_blank";
  a.rel = "noopener";
});

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
