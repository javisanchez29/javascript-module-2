/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    c*/

    const paragraph = document.querySelectorAll('p');
    console.log(paragraph);

    /*
    2. the first div element node
    --> should log the ".site-header" node
    */

    const firstDiv = document.querySelector('div')
    console.log(firstDiv);

    /*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    */

    const jumbotronText = document.querySelector('#jumbotron-text')
    console.log(jumbotronText)

    /*
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
    */

    const primaryContent = document.querySelector('.primary-content')
    primaryContent.querySelector('.p')
    console.log(primaryContent)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const buttonAlert = document.querySelector('#alertBtn')
buttonAlert.addEventListener('click' , (e) => {
    alert(' "Thanks for visiting Bikes for Refugees!"')
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const colorBck=document.querySelector('#bgrChangeBtn')
colorBck.addEventListener("click",changeColor)
function changeColor() {
 let body=document.querySelector('body')
 if (body.style.backgroundColor!="blue") {
    body.style.backgroundColor="blue"
    alert("")
 } else {
    body.style.backgroundColor="the background colour"
}}


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const TextBtn=document.querySelector("#addTextBtn")
TextBtn.addEventListener("click" ,addText)
function addText() {
    let paragraph = document.createElement("p");
    let article=document.querySelector(".article") 
    let paragraphArticle=document.querySelector(".article-lead")// we're just creating an element, it is not visible yet
    article.insertBefore(paragraph, paragraphArticle);
    paragraph.innerText="“LEARN MORE”"
    paragraph.style.color="yellow"
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const LinksBtn = document.querySelector("#largerLinksBtn");
LinksBtn.addEventListener("click", incraseLinks);

function increaseLinks() {
  let grandLinks = document
    .querySelectorAll("a")
    .forEach((a) => (a.style.fontSize = "70px"));
    console.log(grandLinks);
}

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addButton = 0;
const addTextBtn1 = document.querySelector("#addTextBtn");
addTextBtn1.addEventListener("click", addParagraphAndRemove);

function addParagraphAndRemove(params) {
  addButton += 1;
  if (addButton === 1) {
    const paragraph = document.createElement("p");
    const article = document.querySelector(".article");
    const paragraphArticle = document.querySelector(".article-lead");
    article.insertBefore(paragraph, paragraphArticle);
    paragraph.innerText =
      "new";
    paragraph.style.color = "red";
  } else if (addButton != 1) {
    addButton = 0;
    const removeParagraph = document.querySelector(".article").querySelector("p");
    removeParagraph.remove();
  }
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const addButton1=0
const colorPages = document.querySelector("#bgrChangeBtn");
colorPages.addEventListener("click", changeColor);

const colors = ["black", "white", "green", "red", "blue"];

function changeColor() {
  const black = colors.filter(function (element) {
    const z = element === "black";
    return z;
  });
  const white = colors.filter(function (element) {
    const z = element === "white";
    return z;
  });
  const green = colors.filter(function (element) {
    const z = element === "green";
    return z;
  });
  const red = colors.filter(function (element) {
    const z = element === "red";
    return z;
  });
  const blue = colors.filter(function (element) {
    const z = element === "blue";
    return z;
  });

  console.log(red);
  const body = document.querySelector("body");
  addButton1+=1

  if (addButton1 === 1) {
      body.style.backgroundColor = black
      console.log(addButton1);

  }if (addButton1 === 2) {
    body.style.backgroundColor = white
    console.log(addButton1);
      
  }if (addButton1 === 3) {
    body.style.backgroundColor = green
    console.log(addButton1);

  }if (addButton1 === 4) {
    body.style.backgroundColor = red
    console.log(addButton1);
      
  }if (addButton1 === 5) {
    body.style.backgroundColor = blue
    addButton1=0   
  }}