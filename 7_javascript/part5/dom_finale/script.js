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