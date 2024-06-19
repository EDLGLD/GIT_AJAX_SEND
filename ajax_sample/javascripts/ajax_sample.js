let number = 0;
let data = null;
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  if (data) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? number = 0 : number++;
  }
}

function changeVideo() {
  button.addEventListener('click', e => {
    if (!data) {
      const request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          data = request.response;
          getData();
        }
      };
      request.open("GET", "ajax.json");
      request.responseType = "json";
      request.send(null);
    } else {
      getData();
    }
  });
}

window.onload = changeVideo;