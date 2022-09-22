$(document).ready(function () {





   $("#tweet-text").on('input', (event) => {
      //Use jquery to target counter class
      const counter = $(".counter")
      //Assign current currentCount to the event characterlength,
      let currentCount = event.target.value.length;
      let totalChars = 140;
      let charsLeft = totalChars - currentCount;
      counter.text(charsLeft);
      //If character limit is not followed, the form character count turns red
      if (charsLeft < 0) {
         $(".counter").addClass("counterRed");
      }
      else {
         $(".counter").removeClass("counterRed");
      }

   });
});




