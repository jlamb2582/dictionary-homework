import React from "react";

export default function Phonetic (props) {
return (
<div ClassName ="Phonetic">
<a href ={props.phonetic.audio} target ="blank">
Listen
</a>
<br />
{props.phonetic.text}
</div>
);
}