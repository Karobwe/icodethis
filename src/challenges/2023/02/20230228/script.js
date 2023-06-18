const notes = document.querySelectorAll("article");
const frontNoteClassList = "scale-100 z-20";
const middleNoteClassList = "scale-90 -top-48 z-10";
const backNoteClassList = "scale-[.8] -top-56 z-0";

notes.forEach(function(note) {
    note.addEventListener("click", () => {
        note.classList.remove([...middleNoteClassList.split(" ", ...backNoteClassList.split(" "))]);
        note.classList.add(frontNoteClassList.split(" "));
    });
});

function reorderNotes(clickedNote) {
    const [firstNote, secondNote, thirdNote] = notes;
    const [firstOrder, secondOrder, thirdOrder] = [
        firstNote.getAttribute("data-order"), secondNote.getAttribute("data-order"), thirdNote.getAttribute("data-order")
    ];
    const targetOrder = clickedNote.getAttribute("data-order");

    let targetNote, nextNote, lastNote;

    if(firstOrder == targetOrder) {
        targetNote = firstNote;
        nextNote = secondNote;
        lastNote = thirdNote
    } else if(secondOrder == targetOrder) {
        targetNote = secondNote;
        nextNote = thirdNote;
        lastNote = firstNote
    } else {
        targetNote = thirdNote;
        nextNote = firstNote;
        lastNote = secondNote
    }

    targetNote.setAttribute("data-order", 1);
    nextNote.setAttribute("data-order", 2);
    lastNote.setAttribute("data-order", 3);

    targetNote.classList.remove([...middleNoteClassList.split(" "), ...backNoteClassList.split(" ")]);
    targetNote.classList.add([...frontNoteClassList.split(" ")]);

    nextNote.classList.remove([...frontNoteClassList.split(" "), ...backNoteClassList.split(" ")]);
    nextNote.classList.add([...middleNoteClassList.split(" ")]);

    lastNote.classList.remove([...frontNoteClassList.split(" "), ...middleNoteClassList.split(" ")]);
    lastNote.classList.add([...backNoteClassList.split(" ")]);
}