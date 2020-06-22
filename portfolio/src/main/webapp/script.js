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


function getMessage() {
    const commentNum = 10;
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
