// Example 6: eventListner types
document.getElementById(`clickMeButton`).addEventListener(`dblclick`,function(){
    alert("helloWorld");
})

// Example 7: 
document.getElementById(`teaList`).addEventListener(`click`,function(event){
    if(event.target && event.target.matches(`.teaItem`)){
        alert("you Selected:" + event.target.textContent);
        
    }
    
})