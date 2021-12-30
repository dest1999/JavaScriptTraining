"use strict"

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let postES6 = new Post("user1", "user1 text", new Date());
console.log(postES6);
postES6.edit("user1 edited text");
console.log(postES6);

let attachedPostES6 = new AttachedPost("user2", "user2 text", new Date());
console.log(attachedPostES6);
attachedPostES6.makeTextHighlighted();
attachedPostES6.edit("user2 edited text");
console.log(attachedPostES6);