"use strict"

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.Constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function()
{
    this.highlighted = true;
};

let postES5 = new Post("user1", "user1 text", new Date());
console.log(postES5);
postES5.edit("user1 edited text");
console.log(postES5);

let attachedPostES5 = new AttachedPost("user2", "user2 text", new Date());
console.log(attachedPostES5);
attachedPostES5.makeTextHighlighted();
attachedPostES5.edit("user2 edited text");
console.log(attachedPostES5);