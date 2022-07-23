import React from "react";
export default function Skills(props){
    return(
<div className=""> 
<div className= "row">
    
<label for="file" className="col-5 Skill--Name"><h4>{props.Name}</h4></label> 
 <progress id="file" value={props.value} max="100" className="col-5 Skills--prog " /> 
</div>
</div>
    )
}
