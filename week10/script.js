//dragElement() will be our custom function for clicking & dragging elements (in this case, images)
//terrariumElement is the only parameter, which represents the HTML element we want to make draggable.
//Functions are nested inside dragElement() as they all use the same variables and can be used when needed.
function dragElement(terrariumElement) {
    let pos1 = 0; // Stores the change in cursor position on the X-axis
    let pos2 = 0; // Stores the change in cursor position on the Y-axis
    let pos3 = 0; // Stores the current cursor position on the X-axis
    let pos4 = 0; // Stores the current cursor position on the Y-axis

    // .onpointerdown is an event listener that's triggered when the user presses a pointer button like a mouse click on an element.
    // pointerDrag() is a custom function created later down the line.
    terrariumElement.onpointerdown = pointerDrag;

    // pointerDrag() is a custom function for the 
    // The parameter e represents the event object. In this case it's the .onpointerdown event.
    function pointerDrag(e) {

        // .preventDefault prevents any default actions that may occur when the event is triggered. In this case, it prevents dragging the image being dragged (the kind where you see that grayed version of the image).
        e.preventDefault();

        // console.log logs the event to the console for debugging purposes.
        console.log(e);
        
        // When the event occurs, pos3 is set to the current x position of the cursor and pos3 is set to the current y position of the cursor.
        pos3 = e.clientX; // e.clientX returns the cursor's current horizontal value.
        pos4 = e.clientY;// e.clientY returns the cursor's current vertical value.

        // .onpointermove is another event listener. In this case, while the pointer is moving, the function elementDrag() will be called continuously. This function will handle the position of the element as you drag it.
        document.onpointermove = elementDrag;

        // .onpointerup is another event listener. In this case, when the pointer is released, the function stopElementDrag() gets called and stops the dragging process.
        document.onpointerup = stopElementDrag;
    }

    // elementDrag() is a custom function that's responsible for updating the position of the terrariumElement as the user drags it. This all essentially moves the element to follow the mouse movement, as a result its cursor.
    function elementDrag(e) {

        //The first two lines are used to calculate and update the cursor x & y positions.
        // The math done represents how far the mouse has moved since the last time it has been moved.
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        
        // The stored cursor x & y positions are then updated here.
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // The next two lines manipulate the element using CSS.
        // .style.top sets the top position of the element by adjusting its current top position by the amount the mouse has moved vertically.
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        
        // .style.left does the same thing with the left position, by adjusting the current left position by the amount the mouse has moved horizontally.
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    // stopElementDrag is a custom function that's responsible for stopping the drag operation when the user releases the mouse button.
    //All of this neabs thhat the element will stay at its new position after being dragged and will stay that way until a new drag operation is initiated.
    function stopElementDrag() {
        // .onpointerup = null; removes the event listener for the pointerup event. This means that this function will no longer be called when the mouse button is released.
        document.onpointerup = null;
        
        // .onpointermove = null; does the same, removing the event listener for the pointermove event so that the elementDrag() function will no longer be called when the mouse moves.
        document.onpointermove = null;
    }
}



//Planets
//.getElementById() looks for an element with a matching ID in the document (the HTML file in this case) that it's linked to.
dragElement(document.getElementById('planet1'));
dragElement(document.getElementById('planet2'));
dragElement(document.getElementById('planet3'));
dragElement(document.getElementById('planet4'));
dragElement(document.getElementById('planet5'));
dragElement(document.getElementById('planet6'));
dragElement(document.getElementById('planet7'));
dragElement(document.getElementById('planet8'));
dragElement(document.getElementById('planet9'));
dragElement(document.getElementById('sun'));