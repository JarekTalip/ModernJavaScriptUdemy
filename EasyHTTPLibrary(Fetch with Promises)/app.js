const http = new EasyHTTP;

//Get Users
http.get('https://jsonplaceholder.typeicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@mail.com'
}

//Create Post
http.post('https://jsonplaceholder.typeicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Update Post
http.put('https://jsonplaceholder.typeicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

////Delete Post
http.delete('https://jsonplaceholder.typeicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));