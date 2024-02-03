import '../globals.css';

import HeaderSecondary from '../header-secondary';

import Footer from '../footer';


export default function Sponsor() {
  return (
      <div className="flex flex-col w-full">

      <HeaderSecondary />
        

      <main className="flex-1 flex flex-col gap-4 px-4 md:px-0 pt-16 pb-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <p className="text-[48px] text-gray-800">Sponsor GPT</p>
        <div className="p-8 flex flex-col gap-10 bg-white boxed shadow-md">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-3xl text-gray-800">Sponsoring</p>
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
      
      
        
      <Footer />
      </div>  
        
  );
}