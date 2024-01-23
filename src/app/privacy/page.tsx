import Image from "next/image";

export default function Privacy() {
  return (
      <div className="flex flex-col w-full">
        
        <nav className="w-full pt-4">
        
       <div className="navbar w-full relative !h-16 border-b-[1px] border-gray-700 px-8 md:px-0">
        <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
          <div className="flex items-center gap-2">
          <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-900 text-xl" href="/">GPTHub</a>

          </div>
          <div className="flex gap-4 items-center">
          <a className="btn !border-0 bg-transparent hover:opacity-60 px-0 -mt-0.5 mx-4 hover:!bg-transparent" href="/">Home</a>
            
          <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/contact">
      <p className="whitespace-nowrap">Book Demo</p>
      </a>
      </div>


              
              </div>
              </div>


      </nav>
      

      <main className="flex-1 flex flex-col gap-4 px-2 md:px-0 py-16 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="bg-white boxed p-8">
          <h1 className="text-[36px] font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4 italic">Last updated: January 23, 2024</p>
          <p className="mb-4">This Privacy Policy describes how GPTHub, Inc. ("GPTHub") collects, uses, and discloses information about you through the GPTHub services, website, and application (together, the "Services"). By using the Services you agree to the collection, use, and disclosure of your information as outlined in this Privacy Policy.</p>
          <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
          <p className="mb-4">We may collect information about you when you use the Services. This includes:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Account information like your name, email, phone number, and password</li>
            <li>Usage information like your interactions with the Services and AI agents</li>
            <li>Business information like your company name, documents, and communications</li>
            <li>Other information you intentionally provide like survey responses</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">2. How We Use Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide, maintain, and improve the Services</li>
            <li>Enable features and personalize your user experience</li>
            <li>Process your payments and account transactions</li>
            <li>Communicate with you about the Services</li>
            <li>Train your unique GPT AI agent</li>
            <li>Comply with legal requirements</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">3. Information We Share</h2>
          <p className="mb-4">We will not share your personal information except:</p>
          <ul className="list-disc list-inside mb-4">
            <li>With your consent or at your direction</li>
            <li>With our current or future parent companies, affiliates, and subsidiaries</li>
            <li>As part of a merger, acquisition, or sale of assets if your information is part of the transferred assets</li>
            <li>As necessary to provide the Services (e.g. to our hosting provider, payment processors, etc.)</li>
            <li>To comply with legal requirements, such as responding to a subpoena or court order</li>
          </ul>
          <p className="mb-4">We may share your business information with service providers like OpenAI to develop and train your GPT AI agent. Business information will be protected under appropriate technical and contractual safeguards.</p>
          <h2 className="text-2xl font-bold mb-2">4. Security</h2>
          <p className="mb-4">We use appropriate technical and organizational safeguards to protect your information. However, no system is 100% secure and we cannot guarantee absolute security of your information.</p>
          <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
          <p className="mb-4">You have the right to access, update, and delete your personal information. You may also object to our processing of your personal information. Note that we may retain certain information if necessary for our legitimate business purposes.</p>
          <h2 className="text-2xl font-bold mb-2">6. Changes</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time by posting a revised version on our website. The updated Privacy Policy will be effective immediately.</p>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns regarding these Terms, please contact us at:</p>
          <p>GPTHub, Inc.
            <br/>Uzbekistan, Tashkent 100001
            <br/>Email: abdibrokhim@gmail.com
          </p>
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
