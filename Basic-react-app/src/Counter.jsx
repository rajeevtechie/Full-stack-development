//useState() and useEffect() in react
import { useState, useEffect } from "react";
export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);

    function incCountx(){
        setCountx(countx+1);
        console.log(countx);
    }
    function incCounty(){
        setCounty(county+1);
        console.log(county);
    }
    
    useEffect(function printSomething(){
        console.log("this is a side-effect.");
    },[countx]); //dependencies (it only prints when countx is re-rendered)
    return (
        <div>
        <h4>Countx = {countx}</h4>
        <button onClick = {incCountx}>Increase count</button>
        <h4>County = {county}</h4>
        <button onClick = {incCounty}>Increase count</button>
        </div>
    );
}
