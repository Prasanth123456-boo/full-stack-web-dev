document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  function updateCursorPosition(e) {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
  }

  document.addEventListener("mousemove", updateCursorPosition);

  document.addEventListener("mouseenter", function () {
      cursor.style.opacity = 1;
  });

  document.addEventListener("mouseleave", function () {
      cursor.style.opacity = 0;
  });

  gsap.to(cursor, {
      scale: 3,
      opacity: 0.3,
      duration: 0.5,
      ease: "power3.out",
  });
});
