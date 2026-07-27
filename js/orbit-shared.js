export function createCardElement(project, index) {
  const card = document.createElement("article");
  card.className = "orbit-card";
  card.dataset.index = String(index);
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `View details for ${project.name}`);

  if (project.badge) {
    const badge = document.createElement("span");
    badge.className = "orbit-card__badge";
    badge.textContent = project.badge;
    badge.setAttribute("aria-hidden", "true");
    card.appendChild(badge);

    const srBadge = document.createElement("span");
    srBadge.className = "visually-hidden";
    srBadge.textContent = `Hackathon result: ${project.badge}. `;
    card.insertBefore(srBadge, card.firstChild);
  }

  const thumb = document.createElement("div");
  if (project.image) {
    thumb.className = "orbit-card__thumb";
    thumb.style.backgroundImage = `url(${project.image})`;
  } else {
    thumb.className = "orbit-card__thumb orbit-card__thumb--placeholder";
    thumb.textContent = "NO_PREVIEW";
  }
  card.appendChild(thumb);

  const name = document.createElement("h3");
  name.className = "orbit-card__name";
  name.textContent = project.name;
  card.appendChild(name);

  const tag = document.createElement("span");
  tag.className = "tag-readout orbit-card__tag";
  tag.textContent = project.tag;
  card.appendChild(tag);

  return card;
}

export function fillDetailPanel(refs, project, index, total) {
  refs.index.textContent = String(index + 1).padStart(2, "0");
  refs.total.textContent = String(total).padStart(2, "0");
  refs.name.textContent = project.name;
  refs.desc.textContent = project.description;

  refs.stack.innerHTML = "";
  project.stack.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refs.stack.appendChild(li);
  });

  refs.links.innerHTML = "";
  project.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = link.label;
    refs.links.appendChild(a);
  });
}

export function renderMobileList(container, projects) {
  projects.forEach((project) => {
    const details = document.createElement("details");

    const summary = document.createElement("summary");
    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = project.name;
    const plusSpan = document.createElement("span");
    plusSpan.className = "plus";
    plusSpan.setAttribute("aria-hidden", "true");
    plusSpan.textContent = "+";
    summary.appendChild(nameSpan);
    summary.appendChild(plusSpan);
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "body";

    const tag = document.createElement("span");
    tag.className = "tag-readout";
    tag.style.display = "block";
    tag.style.marginBottom = "12px";
    tag.textContent = project.tag;
    body.appendChild(tag);

    const p = document.createElement("p");
    p.textContent = project.description;
    body.appendChild(p);

    const stack = document.createElement("ul");
    stack.className = "detail-panel__stack";
    project.stack.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      stack.appendChild(li);
    });
    body.appendChild(stack);

    const links = document.createElement("div");
    links.className = "detail-panel__links";
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = link.label;
      links.appendChild(a);
    });
    body.appendChild(links);

    details.appendChild(body);
    container.appendChild(details);
  });
}
