// function to get latitude and longitude location
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
  // shows 8 posts
  for (let i = 0; i <= 8; i++) {
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
