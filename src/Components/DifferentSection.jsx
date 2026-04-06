import React from "react";
import img from '../assets/images/differentImg.jpg'

function DifferentSection (props){
    return (
        <div style={{display:'flex', maxWidth:'1080px', margin: '70px auto',textAlign:'left'}}>
            <div style={{maxWidth: '55%'}}>
                <h2>Why We Are Different?</h2>
{props.data.map(item => (

                    <div style={{padding: '5px 20px 5px 0'}}>
                    <img src={item.img1} style={{width: '40px', height:'40px', margin:0, padding:0}}/>
                    <p style={{margin: 0, padding:0}}><b>{item.title}</b></p>
                    <p style={{margin: 0, padding:0}}>{item.subtitle}</p>
                    </div>
                ))}
            
                <button>About more</button>
            </div>
                
            <div style={{minHeight:'400px',width: '45%', backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",}}></div>
        </div>
    )

}

export default DifferentSection