import React,{useState}from"react";
export default function InputComponent(){
    const[inputvalue,setInputvalue]=useState("");
    const handleInputChange=(event)=>{
        setInputvalue(event.target.value);
    };
    return(
        <div>
            <input type="text"value={inputvalue}onChange={handleInputChange}/>
            <p>{inputvalue}</p>
        </div>
    );
}