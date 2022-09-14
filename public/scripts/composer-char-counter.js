$(document).ready(function() {
 




$("#tweet-text").on('input', (event) => {
   // use jquery to target counter class
const counter = $(".counter")
  //assign current currentCount to the event characterlength,
let currentCount = event.target.value.length;
let totalChars = 140;
let charsLeft = totalChars - currentCount;
counter.text(charsLeft);
   if (charsLeft < 0) {
    $(".counter").addClass("counterRed");
   }
   else {
      $(".counter").removeClass("counterRed");
   }

});
});

//<output name="counter" class="counter" for="tweet-text">140</output>
//target output


