import { useState } from "react";

export default function Form1() {
    let [fullName, setFullName] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <form>
            <label htmlFor="username">Username: </label>
            <input placeholder="enter full name"
                type="text"
                value={fullName}
                onChange={handleNameChange}
                id="username"
            />
            <button>Submit</button>
        </form>
    );
}