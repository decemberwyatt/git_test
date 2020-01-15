let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/space2.jpg') {
      myImage.setAttribute ('src','images/space.jpeg');
    } else {
      myImage.setAttribute ('src','images/space2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Explore & Conquer, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Explore & Conquer, ' + storedName;
  }  
  myButton.onclick = function() {
    setUserName();
  }