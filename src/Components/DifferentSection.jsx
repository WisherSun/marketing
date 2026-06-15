import React, {useState} from "react";
import img from '../assets/images/differentImg.jpg'

function DifferentSection (props){
    const [hoveredIndex, setHoverdIndex] = useState(null)
    return (
        <div style={{display:'flex', maxWidth:'1080px', margin: '70px auto',textAlign:'left'}}>
            <div style={{maxWidth: '55%'}}>
                <h2 style={{marginTop:0}}>Why We Are Different?</h2>
{props.data.map((item, index) => (

                    <div key={index}
                    onMouseEnter={()=>setHoverdIndex(index)}
                    onMouseLeave={()=> setHoverdIndex(null)}
                    style={{padding: '5px 50px 5px 0', position: 'relative'}}>
                    <img src={item.img1} style={{width: '40px', height:'40px', margin:0, padding:0, transition: '.9s', opacity: hoveredIndex == index ? 0 :1}}/>
                    <img src={item.img2} style={{position: 'absolute', top:'5px', left:'0', zIndex: '2', width: '40px', height:'40px', margin:0, padding:0, transition: '.9s', opacity: hoveredIndex == index ? 1 :0}}/>
                    <p style={{margin: 0, padding:0}}><b>{item.title}</b></p>
                    <p style={{margin: 0, padding:0}}>{item.subtitle}</p>
                    </div>
                ))}
            
                <button style={{margin:'30px 0 50px'}}>About more</button>
            </div>
                
            <div style={{minHeight:'400px',width: '45%', backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",}}></div>
        </div>
    )

}

export default DifferentSection