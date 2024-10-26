const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jw-logo.png") {
    myImage.setAttribute("src", "images/jw-logo2.png");
  } else {
    myImage.setAttribute("src", "images/jw-logo.png");
  }
};
