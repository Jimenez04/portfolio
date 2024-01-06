import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
   return (
     <header className='flex-center'>
         <nav className='header_container flex-center'>
            <div className="background"></div>
               <ul className='flex'>
                  <li id='about' className='flex-center'>
                     <NavLink className='flex-center' to="/">Home</NavLink>
                  </li>
                  <li id='works' className='flex-center'>
                     <NavLink className='flex-center' to="/project">Project</NavLink>
                  </li>
                  <li id='contact' className='flex-center'>
                     <NavLink className='flex-center' to="/contact">Contact</NavLink>
                  </li>
               </ul>
         </nav>
     </header>
  )
}

{/* <header class="flex-center">
            <nav class="header_container flex-center">
                <div class="background"></div>
                <ul class="flex">
                    <li id="about" class="flex-center"><button onclick="change_content('about')"  href="">About</button></li> 
                    <li id="works" class="flex-center"><button onclick="change_content('works')" href="">Works</button></li>
                    <li id="contact" class="flex-center"><button onclick="change_content('contact')" href="">Contact</button></li>
                </ul>
            </nav>
        </header> */}
