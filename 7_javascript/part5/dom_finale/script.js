// Example 6: 
document.getElementById(`clickMeButton`).addEventListener(`dblclick`,function(){
    alert("helloWorld");
})

// Example 7
document.getElementById(`teaList`).addEventListener(`click`,function(event){
    if(event.target && event.target.matches(`.teaItem`)){
        alert("you Selected:" + event.target.textContent);
        
    }
    
})

// Example 8:
document.getElementById(`feedbackForm`).addEventListener(`submit` , function(event){
   event.preventDefault();

   let feedback = document.getElementById(`feedbackInput`).value;
   console.log(feedback);
   document.getElementById(`feedbackDisplay`).textContent= `Feedback is: ${feedback}`

//    hw: how to grab the value of feedbackinput
})

// Example 9:
document.addEventListener(`DOMContentLoaded`,function(){
    document.getElementById(`domStatus`).textContent="Dom fully loaded";
})

// Example 10:
document.getElementById(`toggleHighlight`).addEventListener(`click`,function(){
    let description = document.getElementById(`descriptionText`);
    description.classList.toggle(`highlight`)
})