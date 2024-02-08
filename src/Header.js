// export default function Header(){
//     return(
//         <div className="bg-gray-800 dark:text-gray-100">
//             <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
// 			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
//             <span className="block mb-2 text-4xl dark:text-violet-400">Media Forge Agency</span>
        
// 			</a>
            
// 			<div className="items-center hidden space-x-8 lg:flex">
// 				<div className="space-x-4">
// 					<a rel="noopener noreferrer" href="#">Home</a>
// 					<a rel="noopener noreferrer" href="#">About us</a>
// 					<a rel="noopener noreferrer" href="#">Services</a>
//                     <a rel="noopener noreferrer" href="#">Contacts</a>
// 				</div>
				
// 			</div>
// 			<button className="flex items-center justify-center p-2 lg:hidden">
// 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-50">
// 					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// 				</svg>
// 			</button>
// 		</header>
//         </div>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-gray-800 dark:text-gray-100">
      <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-900">
        <Link to="/" className="block mb-2 text-4xl dark:text-violet-400">
          Media Forge Agency
        </Link>
        
        <div className="items-center hidden space-x-8 lg:flex">
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        
        <button className="flex items-center justify-center p-2 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-50">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>
    </div>
  );
}
