import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/+esm";
import { CSS3DRenderer, CSS3DObject } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/renderers/CSS3DRenderer.js/+esm";
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js/+esm";
import { ScrollToPlugin } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollToPlugin.js/+esm";
import { PROJECTS } from "./projects-data.js";
import { createCardElement, fillDetailPanel } from "./orbit-shared.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const RADIUS = 420;

export function initOrbit() {
  const wrap = document.querySelector(".orbit-css3d-wrap");
  const mount = document.querySelector(".orbit-css3d");
  const scrollWrap = document.querySelector(".orbit-scroll");
  const stage = document.querySelector(".orbit-stage");
  const progressEl = document.querySelector(".orbit-progress");
  if (!wrap || !mount || !scrollWrap || !stage) return;

  const panelRefs = {
    index: document.getElementById("detail-index"),
    total: document.getElementById("detail-total"),
    name: document.getElementById("detail-name"),
    desc: document.getElementById("detail-desc"),
    stack: document.getElementById("detail-stack"),
    links: document.getElementById("detail-links")
  };

  const N = PROJECTS.length;
  const angleStep = (Math.PI * 2) / N;

  let width = wrap.clientWidth;
  let height = wrap.clientHeight;
  const distance = 900;
  const fov = 2 * Math.atan(height / 2 / distance) * (180 / Math.PI);

  const camera = new THREE.PerspectiveCamera(fov, width / height, 1, 5000);
  camera.position.z = distance;

  const scene = new THREE.Scene();
  const group = new THREE.Group();
  scene.add(group);

  const renderer = new CSS3DRenderer();
  renderer.setSize(width, height);
  mount.appendChild(renderer.domElement);

  const cards = [];
  PROJECTS.forEach((project, i) => {
    const angle = i * angleStep;
    const el = createCardElement(project, i);
    el.addEventListener("click", () => goToProject(i));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToProject(i);
      }
    });

    const object = new CSS3DObject(el);
    object.position.set(Math.sin(angle) * RADIUS, 0, Math.cos(angle) * RADIUS);
    object.rotation.y = angle;
    group.add(object);
    cards.push({ el, angle, index: i });
  });

  let activeIndex = -1;

  function normalize(a) {
    const twoPi = Math.PI * 2;
    return ((a % twoPi) + twoPi) % twoPi;
  }

  function angularDistance(a) {
    const d = Math.abs(normalize(a));
    return Math.min(d, Math.PI * 2 - d);
  }

  function updateActive(rotationY) {
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((c) => {
      const worldAngle = c.angle + rotationY;
      const dist = angularDistance(worldAngle);
      if (dist < closestDist) {
        closestDist = dist;
        closest = c.index;
      }
    });
    if (closest !== activeIndex) {
      activeIndex = closest;
      cards.forEach((c) => c.el.classList.toggle("is-active", c.index === activeIndex));
      fillDetailPanel(panelRefs, PROJECTS[activeIndex], activeIndex, N);
    }
    if (progressEl) {
      progressEl.textContent = `TRACKING ${String(activeIndex + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;
    }
  }

  function render() {
    renderer.render(scene, camera);
  }

  // initial state
  updateActive(0);
  render();

  const st = ScrollTrigger.create({
    trigger: scrollWrap,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.6,
    onUpdate: (self) => {
      const rotationY = -self.progress * Math.PI * 2;
      group.rotation.y = rotationY;
      updateActive(rotationY);
      render();
    }
  });

  function goToProject(i) {
    const targetProgress = i / N;
    const targetY = st.start + targetProgress * (st.end - st.start);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetY },
      ease: "power2.inOut"
    });
  }

  function handleResize() {
    width = wrap.clientWidth;
    height = wrap.clientHeight;
    if (!width || !height) return;
    const newFov = 2 * Math.atan(height / 2 / distance) * (180 / Math.PI);
    camera.fov = newFov;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    render();
  }

  window.addEventListener("resize", handleResize);
  ScrollTrigger.addEventListener("refresh", handleResize);
}
