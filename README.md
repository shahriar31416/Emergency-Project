# ASSIGNMENT-05

## Question No - 01
    - What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
---
### Ans :
     getElementById("id") is used to access an element from DOM. As we know that element is unique ,so this always returns the element object or null if not found..
     getElementByClassName("class") selects all elements that have a given class.So ,it returns a modified HTMLcollection of those elements taken from DOM.
     querySelector("css-selector") takes the first element that matches a CSS selector.That means, it returns a single element.
     querySelectorAll("css-selector") selects all elements matching a CSS selector. It returns a static NodeList.
     
## Question No - 02
    - How do you **create and insert a new element into the DOM**?
---
### Ans : 
    - For creating a new element inside a DOM , we use document.createElement().
    - To configure it , we use (textContent, classList, setAttribute) which assign properties.
    -  (appendChild, prepend, before, after, insertBefore) are used to insert which attach to DOM.
    
## Question No - 03
    - What is **Event Bubbling** and how does it work?
---
### Ans :
    - Event Bubbling is a process through which an already occured event on a child propagates upward by it's parent and further ancestors.
    - When someone do something (like click a button), the event starts right on that button.
      After the button handles it, the event moves upward to the element that contains the button (its parent).
      Then it keeps going up — from parent → grandparent → all the way up to the whole page (document) and even the browser window.
      
## Question No - 04
    -  What is **Event Delegation** in JavaScript? Why is it useful?
---
### Ans :
      Instead of attaching event listeners to every little child element, it just need to put one listener on the parent. Because of event bubbling, whenever a child gets clicked or interacted with, the event naturally travels up to the parent — and that single parent         listener can catch it and decide what to do. This saves one from writing tons of duplicate listeners, keeps your code lighter, and even works for new elements that get added later.That is "Event Delegation"
    -Usefulness :
    -Fewer Listeners but Better Performances
     Instead of attaching 100 separate listeners (one for each button, list item, etc.), it just requires to add one to the parent. That’s lighter and faster.
    - Handles Future Elements Automatically
     If someone add new items later (like dynamically adding new rows, messages, or cards), he don’t need to reattach listeners. The parent listener will still catch their events.

    -Cleaner and Easier Code
     One don’t clutter his code with dozens of event attachments. One listener on the parent is simpler to manage and debug.

## Question No - 05
    - What is the difference between **preventDefault() and stopPropagation()** methods?
---
### Ans :
    - In JavaScript, preventDefault() and stopPropagation() serve different purposes. preventDefault() stops the browser’s built-in behavior for an event, such as preventing a link from navigating or a form from submitting, but it does not stop the event from bubbling        up to parent elements. stopPropagation(), on the other hand, prevents the event from bubbling up the DOM tree to parent elements, but it does not block the default action. For example, when a button inside a form is clicked, preventDefault() would stop the form          from submitting, while stopPropagation() would stop the click from reaching the form’s parent event listeners.

