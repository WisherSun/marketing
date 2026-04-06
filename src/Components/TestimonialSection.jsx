import React from "react";
import SectionTitle from './blockComponents/SectionTitle'

import star from '../assets/images/star.svg'

function TestimonialSection(props){
    const title = 'Testimonials'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    const Stars = ({count}) => {
      const stars = [];

      for (let i = 0; i < count; i++) {
         stars.push(<img key={i} src={star} style={{width:'20px', height:'20px', margin:'-2px 2px'}}/>);
  }

  return <>{stars}</>;
};
 return  <div style={{margin:'100px 0'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{display:'flex', gap:'10px', justifyContent:'center', maxWidth: '1080px', margin:'50px auto'}}>
      {
      props.data.map(item => (
         <div style={{
            maxWidth: '530px',
            padding:'25px 30px',
            boxShadow: '0 0px 25px 0 rgb(0 0 0 / 8%)',
            textAlign:'left'
         }}>
            <Stars count={item.mark} />
            <p style={{margin: 0, color:'#0096ff', fontWeight:'600', fontStyle:'italic', display:'inline-block', margin:'0 10px'}}>
               {item.mark == 5 ?
                  'Exellend' :
               item.mark == 4 ?
                  'Good' :
               item.mark == 3 ?
                  'Not bad' :
                  'Mhh'
            }
            </p>
            
            <p style={{margin: 0, fontStyle:'italic'}}>{item.comment}</p>
            <div style={{display:'flex', margin:'10px 0 0'}}>
               <img src={item.image} style={{width:'60px', height:'60px', marginRight:'10px'}}/>

               <div>
                  <p style={{margin: 0, fontWeight:'600'}}>{item.name}</p>
                  <p style={{margin: 0, color:'#0096ff', fontWeight:'600'}}>{item.position}</p>
               </div>
            </div>            
         </div>
      ))
    }
    </div>
    {props.data.comment}
 </div>
}
export default TestimonialSection