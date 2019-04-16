const posts = [
    {title:'Post one', body:'Post one text'},
    {title:'Post two', body:'Post two text'},
    {title:'Post three', body:'Post three text'},
]

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error message');
            }

            
        },500);
    });
}

function getPosts() {
    setTimeout(function () {
        const output = document.createElement('div');
        let outputin = '';
        posts.forEach(function(post) {
            outputin+=`<li>${post.title} ${post.body}!</li>`
        });
        document.body.appendChild(output);
        output.innerHTML = outputin;
        output.className = 'divek';
    }, 200);
}

createPost({title:'4',body:'4 text'})
.then(getPosts)
.catch(function(err) {
    console.log(err);
});
