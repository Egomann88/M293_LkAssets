window.onload = () => {
  //alert('Aboniert meinen Kanal: Gilganos Playing Games');
  console.log('%cAboniert meinen Kanal: %cGilganos Playing Games', 'font-size: 30px;', 'font-size: 30px; color: blue; font-weight: bold');
  //loadPage();
}

/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

/**
 * 
 * @returns 
 */
async function getScreenSize() {
  if (screen.width >= 1024)
    return true;

  return false;
}

/**
 * tests and loads a page
 */
async function loadPage() {
  let html = "Not-Supported.html";
  if (await getScreenSize()) {
    html = "index-content.html";
  }
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = fetchHtmlAsText(html);
}