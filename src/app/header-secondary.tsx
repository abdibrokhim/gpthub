import './globals.css';

// @ts-ignore
import {logo} from './shared';


export default function HeaderSecondary()
{ 
  return (

    <nav className="w-full pt-4">
        
    <div className="navbar w-full relative !h-16 border-b-[1px] border-gray-700 px-8 md:px-0">
     <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
       <div className="flex items-center gap-4">
       <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-xl font-black" href="/">{logo}</a>

       </div>
       <div className="flex gap-4 items-center">
       <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-blue-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/">
                <p className="whitespace-nowrap">Home</p>
              </a>
       <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/contact">
   <p className="whitespace-nowrap">Book Demo</p>
   </a>
   </div>


           
           </div>
           </div>


   </nav>
   ); 
}