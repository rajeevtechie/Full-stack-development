import Form from "./Event";
import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });
    
    let handelInpurChange = (event) => {
        setFormData((currData)=>{
            return {...currData,[event.target.name]: event.target.value};
        });
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }
    return (
        <div>
            <h3>Give a feedback</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input placeholder="username"
                 type="text" 
                 value={formData.username}
                 onChange={handelInpurChange}
                 id="username"
                 name="username"
                 ></input>

                <br /> <br />
                <label htmlFor="ramarks">Remarks: </label>
                <textarea placeholder="remarks" 
                value={formData.remarks}
                onChange={handelInpurChange}
                id="remarks"
                name="remarks"
                >Remarks</textarea>
                
                <br /> <br />
                <label htmlFor="rating">Rating: </label>
                <input placeholder="rating" 
                type="number" 
                min={1} 
                max={5} 
                value={formData.rating}
                onChange={handelInpurChange}
                id="rating"
                name="rating"
                ></input>

                <br/> <br/> 
                <button>submit feedback</button>
            </form>
        </div>
    );

} 