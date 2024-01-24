import '../globals.css';
// @ts-ignore
import {logo} from '../shared.tsx';

export default function About() {
  return (
      <div className="flex flex-col w-full">
        
        <nav className="w-full pt-4">
        
       <div className="navbar w-full relative !h-16 border-b-[1px] border-gray-700 px-8 md:px-0">
        <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
          <div className="flex items-center gap-2">
            <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-xl font-black" href="/">{logo}</a>

          </div>
          <div className="flex gap-4 items-center">
        
            
          <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/contact">
      <p className="whitespace-nowrap">Book Demo</p>
      </a>
          </div>


              
              </div>
              </div>


      </nav>

      <main className="flex-1 flex flex-col gap-4 px-4 md:px-0 pt-16 pb-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <p className="text-[48px] text-gray-800">About us</p>
        <div className="p-8 flex flex-col gap-10 bg-white boxed shadow-md">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-3xl text-gray-800">Mission</p>
            </div>
            <div className="flex flex-col gap-4 text-gray-700">
              <p>We're on mission to offer versatile GPT AI Agents for a broad spectrum of applications, from education to business, utilizing OpenAI's advanced GPT Builder. We are dedicated to enabling seamless integration of customized AI across diverse use cases, ensuring each solution is perfectly aligned with the specific needs and goals of our clients. Our commitment lies in empowering sectors with AI-driven innovation and efficiency, tailored precisely for every unique scenario.</p>
            </div>
          </div>
          <div className="h-[1px] bg-gray-700 w-full"></div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-3xl text-gray-800">Story</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-gray-700">
                <p>Coming soon. Keep in touch!</p>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-gray-700 w-full"></div>
          <p className="text-sm mt-2 text-gray-700">Want to get in touch? Email us at <a href="mailto:abdibrokhim@gmail.com" className="link text-gray-900">abdibrokhim@gmail.com</a> or <a href="https://www.linkedin.com/company/gpthub/" className="link text-gray-900">join our LinkedIn</a>!</p>
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
