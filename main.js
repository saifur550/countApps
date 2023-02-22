//!Initialize count to 0 on page load
//!Increment count by 1 on button click
//!Decrement count by 1 on button click

// select total count 
const totalCount = document.getElementById('total-count')

//variable to track count 
var count = 0;
totalCount.innerHTML = count;


//! function to increment count 

const handleIncrement = ()=>{
    count++;
    totalCount.innerHTML = count ;
}


//! function to decrement count 
const handleDecrement = ()=>{
   if(count == 0){
    count++;
    totalCount.innerHTML = 0 ;
   }
   else{
     count--;
    totalCount.innerHTML = count ;
   }

}


//! select increment and decrement buttons
const incrementCount = document.getElementById('increment-count')
const decrementCount = document.getElementById('decrement-count')

//! Add click event to buttons
incrementCount.addEventListener('click',handleIncrement);
decrementCount.addEventListener('click',handleDecrement);