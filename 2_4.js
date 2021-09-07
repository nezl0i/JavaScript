'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date
    }

    edit(newtext) {
        this.text = newtext;
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

let Obj = new AttachedPost('David', 'текст', '25.11.21');
Obj.edit('hello world');
Obj.makeTextHighlighted();