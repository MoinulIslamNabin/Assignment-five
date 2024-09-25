document.getElementById("show-donate-section")
  .addEventListener("click", function () {
    showSectionById("donate-section");
    btnColor("show-donate-section");

    document.getElementById('show-history-section').setAttribute('class', 'btn bg-white border-[1px] border-[#111111]/30 drop-shadow-none hover:bg-amber-300/70 hover:border-amber-300/30 hover:text-[#111111] ease-in-out duration-500 delay-100  focus:text-[#111111] ease-in-out delay-100 px-8 py-3 mr-2 ml-2 rounded-lg font-medium text-xl leading-none text-[#111111]/70');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

document.getElementById("show-history-section")
    .addEventListener("click", function () {
    showSectionById("history-section");
    btnColor("show-history-section");

    document.getElementById('show-donate-section').setAttribute('class', 'btn bg-white border-[1px] border-[#111111]/30 drop-shadow-none hover:bg-amber-300/70 hover:border-amber-300/30 hover:text-[#111111] ease-in-out duration-500 delay-100  focus:text-[#111111] ease-in-out delay-100 px-8 py-3 mr-2 ml-2 rounded-lg font-medium text-xl leading-none text-[#111111]/70');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

document.getElementById("blog-link")
  .addEventListener("click", function () {
  window.location.href = "/blog.html";
});
document.getElementById("blog-link-foot")
  .addEventListener("click", function () {
  window.location.href = "/blog.html";
  });
document.getElementById("home-link")
  .addEventListener("click", function () {
  // window.location.href = "https://moinulislamnabin.github.io/Assignment-five/";
  window.location.assign('https://moinulislamnabin.github.io/Assignment-five/');
});
document.getElementById("home-link-foot")
  .addEventListener("click", function () {
  // window.location.href = "https://moinulislamnabin.github.io/Assignment-five/";
  window.location.assign('https://moinulislamnabin.github.io/Assignment-five/');
  });
