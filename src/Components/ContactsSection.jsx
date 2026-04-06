import React from "react";
import SectionTitle from "./blockComponents/SectionTitle";

function ContactsSection(props){
    const title = 'Contact us'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

 return <div style={{background:'#F9F9F9C4', padding:'100px 0'}}>
    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
    <div style={{display:'flex', maxWidth:'1080px', justifyContent:'space-between', margin:'0 auto'}}>
      <div style={{background:'white', width:'400px', padding:'30px'}}>
         <form>
            <input type="text" style={{borderRadius:'5px', border: 'none', background:'#0096FF', margin:'30px auto 10px', padding: '10px 5px', display:'block', width:'350px'}} value="Name"></input>
            <input type="text" style={{borderRadius:'5px', border: 'none', background:'#0096FF', margin:'10px auto', padding: '10px 5px', display:'block', width:'350px'}} value="Email"></input>
            <input type="number" style={{borderRadius:'5px', border: 'none', background:'#0096FF', margin:'10px auto', padding: '10px 5px', display:'block', width:'350px'}} value="Number"></input>
            <input type="number" style={{borderRadius:'5px', border: 'none', background:'#0096FF', margin:'10px auto', padding: '10px 5px', display:'block', width:'350px'}} value="Email"></input>
            <textarea style={{borderRadius:'5px', border: 'none', background:'#0096FF', margin:'10px auto', padding: '10px 5px', width:'350px'}} value="Message"></textarea>
            <button type="submit" style={{borderRadius:'5px', background:'#0096FF', padding: '5px', width:'360px'}}>Submit Now</button>
         </form>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.866686664623!2d30.77241375224721!3d50.12569062151946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d49176194a786d%3A0xec3e643df9599a26!2z0JrQuNGX0LLRgdGM0LrQuNC5INC-0LHQu9Cw0YHQvdC40Lkg0LDRgNGF0LXQvtC70L7Qs9GW0YfQvdC40Lkg0LzRg9C30LXQuQ!5e0!3m2!1suk!2sua!4v1774430942426!5m2!1suk!2sua" 
      width="550" 
      height="450"
      style={{ border: 0 }} 
      allowFullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
 </div>
}
export default ContactsSection