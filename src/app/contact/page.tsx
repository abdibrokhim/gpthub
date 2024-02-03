import '../globals.css';
import Footer from '../footer';

import HeaderSecondary from '../header-secondary';
import { Analytics } from '@vercel/analytics/react';


export default function Contact() {
  return (
      <div className="flex flex-col w-full min-h-screen">
      <Analytics />
        
<HeaderSecondary/>


      <main className="flex-1 flex flex-col gap-4 px-2 md:px-0 py-16 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="bg-white boxed p-8">
          <h1 className="text-[36px] font-bold mb-4">Contact Us</h1>
          <p className="mb-4 italic">We appreciate your interest.</p>
          <p className="mb-4">Click the button below and fill out the form, please.</p>
          <div className="inline-block">
          <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="https://airtable.com/appvmNBXIa5cJvo9I/pagVR3PodI12IdPYQ/form">
      <p className="whitespace-nowrap">Proceed</p>
      </a>
          </div>
        </div>
      </main>
      
      
        
      <Footer />
      </div>  
        
  );
}
