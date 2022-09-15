async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_content = document
    .querySelector('textarea[name="edit-post-content"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

function cancelBtnHandler(event) {
  event.preventDefault();
  window.location.replace("/dashboard/");
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector("#cancel-btn")
  .addEventListener("click", cancelBtnHandler);
