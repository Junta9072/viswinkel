export default async function loadPage(page) {
  const response = await fetch(page);
  const data = await response.text();
  document.querySelector('#content').innerHTML = data;
}
