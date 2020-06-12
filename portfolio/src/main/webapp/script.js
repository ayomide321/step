// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];


        {
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
}

function testKey() {
    var inputVal = document.getElementById("myInput").value;
    if(inputVal == "I am Justice I am God" || inputVal == "i am justice i am God" || inputVal == "I am justice I am kira" || inputVal == "I am justice, I am God")
        {
            window.alert("You got it right! My favorite TV show is Deathnote!");
        }
    else
        {
            window.alert("Try again, you almost got it!");
        }
}
/*
var barelem = document.getElementById("barPercent");
var totalwidth = elem.style.width;
window.onload = function pageLoad() {
    width = 1;
    elem.style.width = width + '%';
    elem.innerHTML = width * 1 + '%';
}
function testKey() {
    var inputVal = document.getElementById("myInput").value;
    var width = 1;
    var id = setInterval(frame(),10);
    function frame() {
        if(inputVal == "I am Justice I am God" || inputVal == "i am justice i am God" || inputVal == "I am justice I am kira" || inputVal == "I am justice, I am God")
        {
            if(width>= totalwidth) {
                clearInterval(id);
            }
            else
            {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
}

//Javascript wasn't working for what I wanted it to so had to scrap original idea as I ran out of time
*/

async function getServletUsingAsyncAwait() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('servlet-container').innerText = quote;
}

function getMessage() {
    const commentNum = 10;
    //const commentNum = document.getElementById('commentNumber-input').value;
    fetch('/data').then(response => response.json()).then((Comment) => { // now we can reference the fields in myObject!
    const commentList = document.getElementById("comment-container");
    commentList.innerHTML = "----";
    for(i = 0; i < commentNum; i++){
        console.log(Comment[i]);
        commentList.appendChild(document.createTextNode(Comment[i]));
    }
    console.log("Adding comments");
    });
}
function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 37.422, lng: -122.084}, zoom: 16});
}

/*
function delMessage() {
    const response = await fetch('/delete-data');
    const quote = await response.text();
    
}*/