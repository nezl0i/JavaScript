'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

Post.prototype.edit = function (text) {
    this.text = text;
};


let Obj = new AttachedPost('David', 'texttexttext', '25.12.21');
Obj.makeTextHighlighted();
let Obj2 = new Post('Artem', 'blablabla', '12.11.21')
Obj2.edit('Hello world')
