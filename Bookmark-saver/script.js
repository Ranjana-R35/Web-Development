const addBtn = document.getElementById("add-bookmark");
const list = document.getElementById("bookmark-list");
const nameInput = document.getElementById("BM-name");
const urlInput = document.getElementById("BM-Url");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !url) {
    alert("Please fill all fields");
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    alert("Enter a valid URL");
    return;
  }

  addBookmark(name, url);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";
});

function addBookmark(name, url) {
  const li = document.createElement("li");

  li.innerHTML = `
    <a href="${url}" target="_blank">${name}</a>
    <button>Remove</button>
  `;

  li.querySelector("button").addEventListener("click", () => {
    li.remove();

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks = bookmarks.filter(
      bookmark => bookmark.name !== name || bookmark.url !== url
    );

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  });

  list.appendChild(li);
}

function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  bookmarks.forEach(bookmark => {
    addBookmark(bookmark.name, bookmark.url);
  });
}