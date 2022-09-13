// function to get lat+lon numbers
async function getPostLocations() {
  const response = await fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(reponse.statusText);
      }
    })
    .then((data) => {
      mapPosts(data);
    });
}

function mapPosts(posts) {
  // limit of 10 posts on display ata time
  for (let i = 0; i <= 10; i++) {
    let post = posts[i];

    // if no post, break
    if (!post) {
      break;
    }

    console.log(post);
    mapPost(post);
  }
}

getPostLocations();
