import '../globals.css';

import HeaderSecondary from '../header-secondary';

import Footer from '../footer';
import { Analytics } from '@vercel/analytics/react';


export default function Terms() {
  return (
      <div className="flex flex-col w-full">
      <Analytics />
        
<HeaderSecondary/>

      <main className="flex-1 flex flex-col gap-4 px-2 md:px-0 py-16 m-auto w-full md:w-4/5 2xl:w-3/5">
	<div className="bg-white boxed p-8">
		<h1 className="text-[36px] font-bold mb-4">Terms</h1>
		<p className="mb-4 italic">Last updated: January 23, 2024</p>
		<p className="mb-4">These Terms of Service ({`"Terms"`}) apply to your access and use of the GPTHub services, website, and application (together, the {`"Services"`}). The Services are provided by GPTHub, Inc. ({`"GPTHub"`}). By using the Services you agree to be bound by these Terms.</p>
		<h2 className="text-2xl font-bold mb-2">1. Eligibility</h2>
		<p className="mb-4">{`You must be at least 13 years old to use the Services. If you are under 18 years old, you confirm that you have your parent or guardian's permission to use the Services and that they have read and agreed to these Terms on your behalf. If you do not have this permission, you may not use the Services.`}</p>
		<h2 className="text-2xl font-bold mb-2">2. Your Use of the Services</h2>
		<p className="mb-4">Subject to your compliance with these Terms, GPTHub grants you a limited, revocable, non-exclusive, non-transferable license to download, install, and use one copy of the GPTHub application on your personal device solely for your own internal business purposes. You may not copy, modify, distribute, sell, lease or sub-license any part of the Services.</p>
		<p className="mb-4">You agree not to abuse or improperly use the Services. You will only use the Services for lawful purposes and in accordance with these Terms and all applicable laws. You are solely responsible for the information and content you contribute to the Services and the lawful use of content you access from the Services.</p>
		<h2 className="text-2xl font-bold mb-2">3. Your GPT</h2>
		<p className="mb-4">When you sign up for GPT, you will get unique AI agent for your use case. Thes AI agent is created solely for you and are not shared with any other GPTHub users or clients. However, GPT may access, use, modify or distribute conversation data in your GPT to improve models.</p>
		<h2 className="text-2xl font-bold mb-2">4. Privacy</h2>
		<p className="mb-4">Please refer to our Privacy Policy for information about how we collect, use and disclose information about you.</p>
		<h2 className="text-2xl font-bold mb-2">5. Ownership and Intellectual Property</h2>
		<p className="mb-4">GPTHub and our licensors own all rights, title, and interest in the Services, including all intellectual property rights. You agree not to copy, modify, distribute, sell, or lease any part of our Services.</p>
		<h2 className="text-2xl font-bold mb-2">6. Disclaimers</h2>
		<p className="mb-4">YOUR USE OF THE SERVICES IS AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN {`"AS IS"`} BASIS WITHOUT WARRANTY OF ANY KIND. GPTHUB DISCLAIMS ALL WARRANTIES EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. GPTHUB DOES NOT WARRANT THAT THE SERVICES ARE SECURE, FREE FROM BUGS OR VIRUSES, OR THAT YOUR INFORMATION WILL NOT BE INTERCEPTED.</p>
		<h2 className="text-2xl font-bold mb-2">7. Limitation of Liability</h2>
		<p className="mb-4">GPTHUB WILL NOT BE LIABLE TO YOU FOR ANY LOST PROFITS OR CONSEQUENTIAL, SPECIAL, PUNITIVE, INDIRECT, OR INCIDENTAL DAMAGES RELATING TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
		<h2 className="text-2xl font-bold mb-2">8. Changes to these Terms</h2>
		<p className="mb-4">GPTHub may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on the GPTHub website. Your continued use of the Services constitutes acceptance of the amended Terms. The updated Terms will apply prospectively only.</p>
		<h2 className="text-2xl font-bold mb-2">9. General</h2>
		<p className="mb-4">These Terms represent the entire agreement between you and GPTHub regarding the use of the Services. If any provision of these Terms is found unenforceable, it will be severed while retaining the intent of the Terms.</p>
		<h2 className="text-2xl font-bold mb-4">Changes to the Terms</h2>
		<p className="mb-4">GPTHub, Inc. may update or modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes. By continuing to access or use the GPTHub app after any changes to these Terms, you agree to be bound by the revised Terms.</p>
		<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
		<p className="mb-4">If you have any questions or concerns regarding these Terms, please contact us at:</p>
    <p>GPTHub, Inc.
      <br/>Uzbekistan, Tashkent 100001
      <br/>Email: abdibrokhim@gmail.com
    </p>
	</div>
</main>
<Footer/>
      
      
      </div>  
        
  );
}
