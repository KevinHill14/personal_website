export async function initExperienceReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const items = document.querySelectorAll(".experience-item");
  items.forEach((item, i) => {
    item.setAttribute("data-aos", "fade-up");
    item.setAttribute("data-aos-delay", String(Math.min(i, 4) * 80));
    item.setAttribute("data-aos-duration", "600");
  });

  const AOS = (await import("https://cdn.jsdelivr.net/npm/aos@2.3.4/+esm")).default;
  AOS.init({
    once: true,
    disable: prefersReduced,
    offset: 60,
    easing: "ease-out"
  });
}
