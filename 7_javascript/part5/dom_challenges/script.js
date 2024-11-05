// popup in the browser
// alert("welcome to the website:)")

// example-1

// higher order function
document.getElementById(`changeTextButton`).addEventListener(`click`, function () {
    let Paragraph = document.getElementById(`myParagraph`);
    //   console.log(Paragraph); //show the full element
    //   console.log(Paragraph.textContent) //show the paragraph when i click on button

    Paragraph.textContent = "website is in maintaianance";
});


// example-2
// example-2
document.getElementById('highlightfirstcity').addEventListener(`click`, function () {
    // how to access element
    let citiesList = document.getElementById(`citiesList`);
    citiesList.firstElementChild.classList.add(`highlight`);


});
