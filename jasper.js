'use strict';

//create a variable for button element
var newNoteButton = document.getElementById('newNoteButton');

//create an event listener that listens for click-event on newNoteButton to render a new-note to page.
//listen for click --> addNote
newNoteButton.addEventListener('click', addNote);


//create function to render newNote to page
function addNote(){
  //create a new instance of "Note"...
  var note = new Note(); //
  //render 'note' to screen.
  note.render(); //i.e - render the actual 'note' to the sceen on the idea 'Note'..
};





/**********************TRASHBIN****************************/
var trashButton = document.getElementById('trashButton');
trashButton.addEventListener('click', trashToggle);

function trashToggle() {
  var binEl = document.querySelector('.trashbin');
  if (binEl) binEl.parentNode.removeChild(binEl);
  else {
    binEl = document.createElement('div');
    binEl.setAttribute('class', 'trashbin');
    document.querySelector('body').appendChild(binEl);

    for (var i = 0; i < Note.notes.length; i++)
      if (Note.notes[i].trashed) {
        Note.notes[i].coords = [0,0];
        Note.notes[i].render('.trashbin');
      }
    }
};
