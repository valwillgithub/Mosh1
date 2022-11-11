const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
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
            if (!error)
                resolve();
            else
                reject('Error: Something went wrong');

        }, 2000);
    });
}

let newPost = {title : 'Post Three', body : 'This is post three'};
/** createPost(newPost)
.then(getPosts)
.catch(err => console.log(err)); */

// Promise.all
const promise1 = Promise.resolve('Hello Val');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye')
);
const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users') //fetch returns a promise
.then(res => res.json());

Promise.all([promise1, promise2, promise3, fetchPromise])
.then(values => console.log(values));