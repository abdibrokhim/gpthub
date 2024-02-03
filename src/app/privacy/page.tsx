import '../globals.css';

import Footer from '../footer';

import HeaderSecondary from '../header-secondary';


export default function Privacy() {
  return (
      <div className="flex flex-col w-full">
       
<HeaderSecondary/>
      

      <main className="flex-1 flex flex-col gap-4 px-2 md:px-0 py-16 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="bg-white boxed p-8">
          <h1 className="text-[36px] font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4 italic">Last updated: January 23, 2024</p>
          <p className="mb-4">This Privacy Policy describes how GPTHub, Inc. {`("GPTHub")`} collects, uses, and discloses information about you through the GPTHub services, website, and application (together, the {`"Services"`}). By using the Services you agree to the collection, use, and disclosure of your information as outlined in this Privacy Policy.</p>
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
      
      
      <Footer />
     
      </div>  
        
  );
}
