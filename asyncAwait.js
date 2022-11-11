const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) resolve();
      else reject("Error: Something went wrong");
    }, 2000);
  });
}

let newPost = { title: "Post Three", body: "This is post three" };
// Async & Await
async function awaitExample() {
  await createPost(newPost);
  getPosts();
}

awaitExample();

// Async & Await with fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
//   .then((array) => {
//     console.log("users", array[0]);
//     console.log("posts", array[1]);
//     console.log("albums", array[2]);
//   })
//   .catch("oops");

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log(error);
  }
}; //getData
debugger;
getData();
