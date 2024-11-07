// popup in the browser
// alert("welcome to the website:)")

// example-1

// higher order function
document
  .getElementById(`changeTextButton`)
  .addEventListener(`click`, function () {
    let Paragraph = document.getElementById(`myParagraph`);
    //   console.log(Paragraph); //show the full element
    //   console.log(Paragraph.textContent) //show the paragraph when i click on button

    Paragraph.textContent = "website is in maintaianance";
    Paragraph.classList.add(`highlight`);
  });

// example-2
document
  .getElementById("highlightfirstcity")
  .addEventListener(`click`, function () {
    // how to access element

    let citiesList = document.getElementById(`citiesList`);
    citiesList.firstElementChild.classList.add(`highlight`);
  });

//  example-3
document.getElementById(`changeOrder`).addEventListener(`click`, function () {
  let coffeeType = document.getElementById(`coffeeType`);
  coffeeType.textContent = `expresso`;
  //   how to add css in javascript
  coffeeType.style.backgroundColor = "orange";
  coffeeType.style.padding = `5px`;
  coffeeType.style.color = `white`;
});

// example-4
document.getElementById(`addNewItem`).addEventListener(`click`, function () {
  let addtasks = document.createElement(`li`);
  addtasks.textContent = "Toast";
  document.getElementById(`shoppingList`).appendChild(addtasks);
});

// example-5
document.getElementById(`removeLastItem`).addEventListener(`click`,function(){
    let removelast = document.getElementById(`taskList`)
    removelast.lastElementChild.remove()
})
