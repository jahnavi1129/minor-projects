// Select elements
const bookmarkForm = document.querySelector("#bookmarkForm");
const bookmarkTitle = document.querySelector("#bookmarkTitle");
const bookmarkURL = document.querySelector("#bookmarkURL");
const bookmarkList = document.querySelector("#bookmarkList");

// Handle form submission
bookmarkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = bookmarkTitle.value.trim();
  const url = bookmarkURL.value.trim();

  if (!title || !url) {
    alert("Please fill out both fields!");
    return;
  }

  const li = document.createElement("li");

  const link = document.createElement("a");
  link.textContent = title;
  link.href = url;
  link.target = "_blank";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(link);
  li.appendChild(deleteBtn);

  bookmarkList.appendChild(li);

  bookmarkTitle.value = "";
  bookmarkURL.value = "";
});
// Event Delegation for Deleting Bookmarks
bookmarkList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
});
  