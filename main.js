//You are to get all elements in your html by id using the selector method in JavaScript.
var mainHeading = document.getElementById('main-heading')
var para = document.getElementsByTagName('p')
var pageHeader = document.getElementById('page-header')

var buttonText = document.getElementById('btn')
var cardColor = document.getElementsByClassName('card')

//You are to change the header text which says "Let's modify the DOM" to "New DOM Layout" and also change the background color by adding this classList "bg-success"
mainHeading.textContent = 'New DOM Layout';   
mainHeading.classList.add ('bg-success');

//You are to access each paragraph tag from your html and add the following text content to it:
para[0].textContent='The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
para[0].style.fontStyle = 'italic';
para[1].textContent='The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'
para[1].style.fontStyle = 'italic';


//You are to add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.
addEventListener("click", myFunction);

function myFunction() {
para[2].innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
para[2].style.fontStyle = 'italic';
}

//You are to change each boxes to the proper colors mentioned in them. Note the new classLists you are to add for each boxes:
cardColor[0].classList.replace('bg-white','bg-danger');

cardColor[1].classList.replace('bg-white','bg-primary');

cardColor[2].classList.replace('bg-white','bg-warning');

cardColor[3].classList.replace('bg-white','bg-success');

cardColor[4].classList.replace('bg-white','bg-dark');



