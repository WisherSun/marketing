import React from "react";

import tool1 from '../assets/images/tool1.png'
import tool2 from '../assets/images/tool2.png'
import tool3 from '../assets/images/tool3.png'
import tool4 from '../assets/images/tool4.png'
import tool5 from '../assets/images/tool5.png'

function ToolSection(props){

 return <div style={{background:'#0096FF', padding:'100px 0'}}>

    <div style={{display:'flex', justifyContent:'space-between', width:'1535px', margin:'0 auto', overflow:'hidden'}}>
        <img src={tool1} style={{ height:'120px'}}/>
        <img src={tool2} style={{ height:'120px'}}/>
        <img src={tool3} style={{ height:'120px'}}/>
        <img src={tool4} style={{ height:'120px'}}/>
        <img src={tool5} style={{ height:'120px'}}/>

    </div>
 </div>
 
}
export default ToolSection