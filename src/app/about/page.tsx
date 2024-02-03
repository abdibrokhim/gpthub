import '../globals.css';

import HeaderSecondary from '../header-secondary';

import Footer from '../footer';
import { Analytics } from '@vercel/analytics/react';


export default function About() {
  return (
      <div className="flex flex-col w-full">
      <Analytics />

      <HeaderSecondary />
        

      <main className="flex-1 flex flex-col gap-4 px-4 md:px-0 pt-16 pb-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <p className="text-[48px] text-gray-800">About us</p>
        <div className="p-8 flex flex-col gap-10 bg-white boxed shadow-md">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-3xl text-gray-800">Mission</p>
            </div>
            <div className="flex flex-col gap-4 text-gray-700">
              <p>{`We're on mission to offer versatile GPT AI Agents for a broad spectrum of applications, from education to business, utilizing OpenAI's advanced GPT Builder. We are dedicated to enabling seamless integration of customized AI across diverse use cases, ensuring each solution is perfectly aligned with the specific needs and goals of our clients. Our commitment lies in empowering sectors with AI-driven innovation and efficiency, tailored precisely for every unique scenario.`}</p>
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
      
      
        
      <Footer />
      </div>  
        
  );
}
