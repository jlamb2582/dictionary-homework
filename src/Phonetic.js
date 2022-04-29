import React from "react";
import "./Phonetic.css";

export default function Phonetic (props) {
return (
<div ClassName ="Phonetic">
<a href ={props.phonetic.audio} target ="blank" className="phonetic-link">
Listen
</a>
<span className="text">
{props.phonetic.text}
</span>
</div>
);
}