document
  .getElementById("show-donate-section")
  .addEventListener("click", function () {
    showSectionById("donate-section");
    btnColor("show-donate-section");
  });

document
  .getElementById("show-history-section")
  .addEventListener("click", function () {
    showSectionById("history-section");
    btnColor("show-history-section");
  });

document.getElementById("blog-link").addEventListener("click", function () {
  window.location.href = "/blog.html";
});
document.getElementById("home-link").addEventListener("click", function () {
  window.location.href = "/index.html";
});
