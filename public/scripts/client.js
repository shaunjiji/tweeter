// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */




// // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// const createTweetElement = function (tweetData) {
// // declare variable called
// // this function should extract text from content property (from tweetData) and store that as $tweet.text 
// const $tweet = $(`

//   <article>
//       <div class="tweetheader">
//         <div>
//       <i class="fa-solid fa-face-sunglasses"></i>
//       <span>${tweetData.user.name}</span>
//        </div>
//       <span>${tweetData.handle}</span>
//       </div>
      
//       <p>${tweetData.content.text}</p>

//       <footer class="tweetfooter">
//       <span> ${tweetData.created_at}</span>
//       <div>
//       <i class="fa-solid fa-flag"></i>
//       <i class="fa-solid fa-retweet"></i>
//       <i class="fa-solid fa-heart"></i>
//      </div>
//      </footer>
//       </article>


// `);




// return $tweet;
// }



// const $tweet = createTweetElement(tweetData);