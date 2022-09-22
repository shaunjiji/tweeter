
//This function is responsible for taking in an array of tweets and then appending each one to the .tweetcontainer
const renderTweets = function (tweets) {
  $('.tweetcontainer').empty();
  for (let tweet of tweets) {
    const $element = createTweetElement(tweet);
    $('.tweetcontainer').prepend($element);
  }
  return;
}


//This function takes in an object and posts the tweet with necessary info into our html page. 

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

  const dataLength = $("#tweet-text").val().length;
  const alertRed = $("#alertRed");

  if (dataLength === 0) {
    errorMsg = "Please enter a proper tweet";
    alertRed.text(errorMsg);
    alertRed.slideDown();
    return;
  }

  if (dataLength > 140) {
    errorMsg = "Character limit is 140.";
    alertRed.text(errorMsg);
    alertRed.slideDown();
    return;
  }

  let data = $(this).serialize();

  alertRed.slideUp();
  $.ajax({ url: '/tweets', method: 'POST', data: data })
    .then(() => loadTweets())
    .then(() => $('.formElement')[0].reset())
    .then(() => $(".counter").text(140))
}

const loadTweets = function () {
  $.ajax({
    url: '/tweets',
    method: "GET",
    success: function (res) {
      renderTweets(res);
    }
  }
  )
}



