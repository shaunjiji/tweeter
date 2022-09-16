// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// const { render } = require("express/lib/response");


const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    const $element = createTweetElement(tweet);
    $('.tweetcontainer').prepend($element);
  }
  return;
}




const createTweetElement = function (tweetData) {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  

  const $tweet = $(`

<article>
<div class="tweetheader">
  <div>
<img src="${tweetData.user.avatars}">
<span>${tweetData.user.name}</span>
 </div>
<span>${tweetData.user.handle}</span>
</div>

<p>${escape(tweetData.content.text)}</p>

<footer class="tweetfooter">
<span> ${timeago.format(tweetData.created_at)}</span>
<div>
<i class="fa-solid fa-flag"></i>
<i class="fa-solid fa-retweet"></i>
<i class="fa-solid fa-heart"></i>
</div>
</footer>
</article>
<br>
`);

  return $tweet;
}





$(document).ready(function () {


$('.formElement').on("submit", onSubmit);

loadTweets();




});

const onSubmit = function (event) {
  event.preventDefault();
 
  let data = $(this).serialize();  
  let dataLength = data.replace("text=", "").length;
  const alertRed = $("#alertRed");
 
  if (dataLength !== 0 && dataLength <= 140) {
  alertRed.slideUp();
  $.ajax({ url: '/tweets', method: 'POST', data: data })
  .then (()=> {  
 loadTweets();
   })
  }
  else if (dataLength === 0) {
    console.log("Test1");
    errorMsg = "Please enter a proper tweet";
    alertRed.text(errorMsg);
    alertRed.slideDown();
   
  }
  else if (dataLength > 140){
   errorMsg = "Character limit is 140.";
   alertRed.text(errorMsg);
   alertRed.slideDown();
   
  }
  else {
    alertRed.slideUp();
  }
  
  // else {
  //   alert("Invalid character count");
  // }

}




const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: "GET",
    success: function(res) {
      renderTweets(res);
    }
  }
  )
}



