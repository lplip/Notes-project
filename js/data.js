function noteContractor(title, when,decription,index) {
    this.getTitle = function() {
        return title;
    }
    this.getWhen = function () {
        return when;
    }
    this.decription = function () {
        return decription;
    }
    this.index = function () {
        return index;
    }
}



var notesArr = [];
