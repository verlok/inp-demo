const urlParams = new URLSearchParams(window.location.search);
const blockForParam = Number(urlParams.get("blockFor")) || 0;

const blockFor = (ms) => {
  const target = performance.now() + ms;
  while (performance.now() < target);
};

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      blockFor(blockForParam);
      
      const content = header.nextElementSibling;
      headers.forEach((h) => {
        if (h !== header) {
          h.nextElementSibling.style.maxHeight = null;
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });

    header.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        header.click();
      }
    });
  });
});
