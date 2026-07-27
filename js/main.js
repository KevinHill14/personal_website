import { PROJECTS } from "./projects-data.js";
import { renderMobileList } from "./orbit-shared.js";
import { initExperienceReveal } from "./reveal.js";

document.getElementById("year").textContent = new Date().getFullYear();

renderMobileList(document.querySelector(".orbit-mobile-list"), PROJECTS);

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktopWidth = window.matchMedia("(min-width: 861px)").matches;

if (prefersReduced) {
  document.body.classList.add("no-orbit");
}

if (isDesktopWidth && !prefersReduced) {
  const stage = document.querySelector(".orbit-stage");
  if (stage && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            io.disconnect();
            import("./orbit.js").then((mod) => mod.initOrbit());
          }
        });
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(stage);
  }
}

initExperienceReveal();
