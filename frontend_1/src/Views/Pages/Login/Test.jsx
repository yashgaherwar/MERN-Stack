import React,{useState} from "react";
const Test=()=>{
    const [data,setData]=useState(1);

    return (
        <h2>
            {data}
        </h2>
    )
}
export default Test