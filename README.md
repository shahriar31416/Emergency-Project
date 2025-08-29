## ASSIGNMENT-05

### Question No - 01
    - What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
---
##### Ans :
     getElementById("id") is used to access an element from DOM. As we know that element is unique ,so this always returns the element object or null if not found..
     getElementByClassName("class") selects all elements that have a given class.So ,it returns a modified HTMLcollection of those elements taken from DOM.
     querySelector("css-selector") takes the first element that matches a CSS selector.That means, it returns a single element.
     querySelectorAll("css-selector") selects all elements matching a CSS selector. It returns a static NodeList.
     
### Question No - 02
    - How do you **create and insert a new element into the DOM**?
---
##### Ans : 
    - For creating a new element inside a DOM , we use document.createElement().
    - To configure it , we use (textContent, classList, setAttribute) which assign properties.
    -  (appendChild, prepend, before, after, insertBefore) are used to insert which attach to DOM.
