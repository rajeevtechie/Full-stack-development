//handling events
function handleHover(){
    console.log("Hover");
}

function doSomething(){
    console.log("button was clicked");
}

export default function Button(){
    return (
        <div>
            <button onClick = {doSomething}>Click me</button>
            <button onMouseOver={handleHover}>hover over me</button>
        </div>
    );
}