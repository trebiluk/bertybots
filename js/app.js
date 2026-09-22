function fitPlayfield() {
  const canvas = document.getElementById("c");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.max(1, Math.round(rect.width * dpr));
  canvas.height = Math.max(1, Math.round(rect.height * dpr));
}

window.addEventListener("resize", fitPlayfield);
fitPlayfield();

const { boot } = await import("./shop.js");
boot();
