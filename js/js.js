var getNoteDiv = document.getElementById("notesDiv");
var SaveButton = document.getElementById("saveB");

var getTitle = document.getElementById("titleInput");
var getDate = document.getElementById("dateInput");
var getDecription = document.getElementById("textInput");

//numbers of notes index
var notesNumber = 0;

//index for the notes
var indexNumber = 0;

//creat new note elemente
function creatNodes(note) {
    //create

    var creatIndexP = document.createElement("p");
    creatIndexP.setAttribute("class", "indexP");
    creatIndexP.innerHTML = note.index();
 
    var creatDiv = document.createElement("div");
    creatDiv.setAttribute("class", "noteBobyStyle");
   
    var creatH3 = document.createElement("h3");
    creatH3.innerHTML = note.getTitle();
    
    var creatP1 = document.createElement("p");
    creatP1.innerHTML = note.decription();

    var creatP2 = document.createElement("p");
    creatP2.innerHTML = note.getWhen();
    
    var creatButton = document.createElement("button");
    creatButton.setAttribute("class", "deleteNote")
    creatButton.onclick = removeNote;
    

    //append
    creatDiv.appendChild(creatButton);
    creatDiv.appendChild(creatIndexP)
    creatDiv.appendChild(creatH3);
    creatDiv.appendChild(creatP2);
    creatDiv.appendChild(creatP1);
    
    
    
    return creatDiv;
}
//set Notes Number
function NoteNumber() {
    var number = document.getElementById("numderOfNotes");
    number.innerHTML = notesNumber;
}

//get the p index number 
function getPindex(target) {
    var theElement = target.parentElement;
    var theIndexNumber = theElement.children[1].innerHTML;
    return theIndexNumber;
}

//find the note in the array
function getNoteIndex(input) {
    for (var i = 0; i < notesArr.length; i++) {
        if(notesArr[i].index() == input){
            var index = i
        }
    }
    return index;
}

//remove the note
function removeNote(event) {

    event.target.parentElement.remove();
    var theIndexNumber = getPindex(event.target);
    var theNoteIndex = getNoteIndex(theIndexNumber);
    notesArr.splice(theNoteIndex, 1);
    console.log("the" + '' + +theNoteIndex + '' + "removed");
    //set Note number
    notesNumber--
    NoteNumber()
}

//validation status
var validationStatus = true;
//if the form is empty
function ifEmpty(input1, input2, input3) {
    
    var titleP = document.getElementById("titleValidation");
    var dateP = document.getElementById("dateValidation");
    var textP = document.getElementById("descValidation");
    // title
    if (input1.length == 0) {
        validationStatus = false;
        titleP.innerHTML = "The title is Empty ...";
    } else {
        titleP.innerHTML = "";
    }
    //date
    if (input2.length == 0) {
        validationStatus = false;
        dateP.innerHTML = "The date is Empty ...";
    } else {
        dateP.innerHTML = "";
    }
    //description
    if (input3.length == 0) {
        validationStatus = false;
        textP.innerHTML = "The description is Empty ...";
    } else {
        textP.innerHTML = "";
    }
}


//insert the data to array
function InsertToNoteArr() {

    //get the index element and set a value
    var indexValue = indexNumber++;
    //form value
   var Title = getTitle.value;
   var date =  getDate.value;
   var description = getDecription.value;

   ifEmpty(Title, date, description);

  if (validationStatus == true) {
      var creatNoteObj = new noteContractor(Title, date, description, indexValue);
      notesArr.push(creatNoteObj);
  } 

}

//"save" to array and show the data 
SaveButton.onclick = function () {
    validationStatus = true;
    
    if (validationStatus == true) {
        InsertToNoteArr();
    }
    if (validationStatus == true) {
        for (var i = 0; i < notesArr.length; i++) {
            var set = creatNodes(notesArr[i]);
        }
        getNoteDiv.appendChild(set);
        //set Note number
        notesNumber++
        NoteNumber()
        //reset
        getTitle.value = "";
        getDate.value = "";
        getDecription.value = "";
    }
    
}
