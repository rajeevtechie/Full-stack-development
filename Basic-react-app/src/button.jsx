function handleHover(){
    console.log("Hover");
}

export default function Button(){
    return (
        <div>
            <button onMouseOver={handleHover}>hover over me</button>
        </div>
    );
}