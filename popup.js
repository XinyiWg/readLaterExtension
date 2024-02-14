/** @format */

document.getElementById("savePage").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let pages = JSON.parse(localStorage.getItem("savedPages") || "[]");
    let pageName =
      document.getElementById("pageName").value.trim() || tabs[0].url;
    let pageUrl = tabs[0].url;
    // Save page with custom name and URL
    pages.push({ name: pageName, url: pageUrl });
    // pages.push(tabs[0].url);
    localStorage.setItem("savedPages", JSON.stringify(pages));
    // refresh to make sure the list is updated
    renderPages();
  });
});

// if we click the clearAll button, remove all saved pages from local storage
document.getElementById("clearAll").addEventListener("click", function () {
  localStorage.removeItem("savedPages");
  renderPages();
});

function renderPages() {
  let pages = JSON.parse(localStorage.getItem("savedPages") || "[]");
  //   get list
  let listElement = document.getElementById("pageList");
  //   clear first
  listElement.innerHTML = "";

  pages.forEach(function (page) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = page.name;
    a.href = page.url;
    a.target = "_blank"; // open in new tab
    li.appendChild(a);
    listElement.appendChild(li);
  });
}
// to render the saved pages when the popup is opened
document.addEventListener("DOMContentLoaded", renderPages);
