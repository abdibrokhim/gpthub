import '../globals.css';
// @ts-ignore
import {logo} from '../shared.tsx';

export default function Contact() {
  return (
      <div className="flex flex-col w-full min-h-screen">
        
        <nav className="w-full pt-4 ">
        
       <div className="navbar w-full relative !h-16 border-b-[1px] border-gray-700 px-8 md:px-0">
        <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
          <div className="flex items-center gap-2">
          <a className="btn !border-0 bg-transparent px-0 mx-4 text-black text-xl font-black text-gray-700" href="/">{logo}</a>

          </div>
          <div className="flex gap-4 items-center">
          <a className="btn !border-0 bg-transparent hover:opacity-60 px-0 -mt-0.5 mx-4 hover:!bg-transparent" href="/">Home</a>
            
      </div>


              
              </div>
              </div>


      </nav>

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
      
      
        
      <footer className="py-6 px-4 md:px-0 border-t-[1px] border-gray-700 w-full !bg-white"><div className="flex flex-col md:flex-row justify-between gap-4 m-auto w-full md:w-4/5 2xl:w-3/5">
        
        <a className="clickable" href="/">
        </a>
        
        <div className="flex items-center gap-x-16 gap-y-4 flex-wrap text-gray-600 text-xs">
          <a className="link link-hover whitespace-nowrap" href="/terms">Terms</a>
          <a className="link link-hover whitespace-nowrap" href="/privacy">Privacy Policy</a>
          <a className="link link-hover whitespace-nowrap" href="/about">About</a>
          <p className="whitespace-nowrap">© 2024 GPTHub, Inc.</p>
          <div className="flex items-center gap-3">
            <a className="clickable" href="https://www.linkedin.com/company/gpthub/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-4 h-4 shrink-0 iconify iconify--simple-icons" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path></svg></a>
            </div>
            </div></div>
        </footer>
      </div>  
        
  );
}
