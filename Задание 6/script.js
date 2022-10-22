const makePositionCenter = () => {
    let parent = document.querySelector('.parent-js'),
        child = document.querySelector('.child-js');
    
        let parentWidth  = parent.offsetWidth,
            parentHeight  = parent.offsetHeight,
            childWidth  = child.offsetWidth,
            childHeight = child.offsetHeight;

    child.style.left = `${parentWidth/2 - childWidth/2}px`;
    child.style.top = `${parentHeight/2 - childHeight/2}px`;
}

makePositionCenter ();
