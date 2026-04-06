import React from "react";

function SectionTitle (props){
    return(
    <div style={{maxWidth: '700px', textAlign:'center', margin: '0 auto'}}>
    <h2>{props.title}</h2>
    <div style={{height:'3px', width:'90px', background:'#0096ff', margin: '0 auto'}}></div>
    <div style={{height:'3px', width:'90px', background:'#0096ff', margin: '8px auto 0'}}></div>
    <p>{props.subtitle}</p>
    </div>
    )
}
export default SectionTitle