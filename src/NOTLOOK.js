/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

/**
 * tests and loads a page
 */
async function loadPage() {
  let html = "Not-Supported.html";
  if (await checkScreenSize())
    html = "index-content.html";

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = await fetchHtmlAsText(html);
}

/**
 * 
 * @returns 
 */
async function checkScreenSize() {
  if (screen.width >= 1024)
    return true;

  return false;
}

/**
 * 
 * @param {string} id 
 */
function scroll2(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}