'use client'
import Image from 'next/image';
import '../globals.css';
import loadingGif from '../../app/assets/loading.gif';
import Footer from '../footer';

import HeaderSecondary from '../header-secondary';
import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from '../firebase-config';
import { GptData } from '../showcase/types';
import { toast } from 'react-toastify';
import { clear } from 'console';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);


export default function SubmitGpt() {

  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [category, setCategory] = useState('');

  const [loading, setLoading] = useState(false);

  const defaultImageUrl = 'https://iili.io/J00NF1V.png';

  const showToast = (message: string, severity: string) => {
    switch (severity) {
      case 'info':
        toast.info(message);
        break;
      case 'success':
        toast.success(message);
        break;
      case 'warning':
        toast.warn(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };
  


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-[46px] items-center bg-white !rounded -mx-0.5 w-full md:w-[170px] shrink-0">
      <div className="h-full w-full border-[2px] border-transparent">
        <div className="dropdown h-full w-full shrink boxed !rounded">
          <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
            <button
              onClick={toggleDropdown}
              className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 pl-2 pr-0.5"
            >
              <div className="flex-1 text-left select-none line-clamp-1">
                {category || 'Category'}
              </div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="transition-all text-gray-700 iconify iconify--mdi" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                  </svg>
            </button>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content w-full menu mt-2 p-2 bg-base-100 rounded-lg border-[1px] border-gray-300 z-10 max-h-[160px] overflow-y-auto flex flex-col flex-nowrap overflow-x-hidden no-scrollbar"
            >
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('DALL-E')}
                    >
                      <div className="flex-1 text-left select-none">DALL-E</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Writing')}
                    >
                      <div className="flex-1 text-left select-none">Writing</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Productivity')}
                    >
                      <div className="flex-1 text-left select-none">Productivity</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Research & Analysis')}
                    >
                      <div className="flex-1 text-left select-none">Research & Analysis</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Programming')}
                    >
                      <div className="flex-1 text-left select-none">Programming</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Education')}
                    >
                      <div className="flex-1 text-left select-none">Education</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Lifestyle')}
                    >
                      <div className="flex-1 text-left select-none">Lifestyle</div>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="tooltip-top !p-0 !bg-transparent flex h-full !px-2">
                    <button className="flex flex-1 items-center rounded-md py-1.5 gap-1.5 w-full h-full active:!bg-transparent active:!text-black/50 active:opacity-60 hover:opacity-80 px-1"
                      onClick={() => setCategory('Other')}
                    >
                      <div className="flex-1 text-left select-none">Other</div>
                    </button>
                  </div>
                </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};




function isFormValid() {
    return businessName.length > 0 &&
    email.length > 0 &&
    companyUrl.length > 0 &&
    title.length > 0 &&
    tagline.length > 0 &&
    description.length > 0 &&
    imageUrl.length > 0 &&
    demoUrl.length > 0 &&
    category.length > 0
}

function isUrlValid(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function clearForm() {
  setBusinessName('');
  setEmail('');
  setCompanyUrl('');
  setTitle('');
  setTagline('');
  setDescription('');
  setImageUrl('');
  setDemoUrl('');
  setCategory('');
}

function simulateSubmit() {
  const urls = [companyUrl, imageUrl, demoUrl];

  urls.forEach(url => {
    if (!isUrlValid(url)) {
      showToast('Invalid url', 'warning');
      return;
    }
  });
  
  if (!isFormValid()) {
    showToast('Please fill out all fields', 'warning');
    return;
  } else {
    showToast('GPT submitted successfully', 'success');
  clearForm();
  }
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // simulateSubmit();
  submitGpt();

}


function submitGpt() {

  if (!isFormValid()) {
    showToast('Please fill out all fields', 'warning');
    return;
  }
  
  if (!isUrlValid(companyUrl) || !isUrlValid(imageUrl) || !isUrlValid(demoUrl)) {
    showToast('Invalid url', 'warning');
    return;
  }

  if (email.length < 5 || !email.includes('@') || !email.includes('.')) {
    showToast('Invalid email', 'warning');
    return;
  }

  const gptData: GptData = {
    created_at: new Date(),
    created_by: businessName,
    category: category,
    company_url: companyUrl,
    demo_url: demoUrl,
    description: description,
    image: imageUrl,
    isApproved: false,
    isSponsored: false,
    title: title,
    tagline: tagline,
    email: email,
  };
  console.log('Creating GPT...');
  console.log(gptData);

  const saveGpt = async () => {
    setLoading(true);

    const docRef = await addDoc(collection(db, "gpts"), gptData);
    console.log("Document written with ID: ", docRef.id);

    showToast('GPT submitted successfully', 'success');
    clearForm();

    setLoading(false);
  }

  saveGpt();

}


  return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen w-full">
       
<HeaderSecondary/>

  <div className="m-auto w-[95%] md:w-4/5 max-w-[600px] flex flex-col gap-4 relative py-8">
  <ToastContainer />
    <span className="absolute right-[10px] md:-right-[140px] -top-[10px] md:top-[100px] -z-10">
      <div className="border-[1px] border-[#FEC84B] rounded-[100%] animate-pulse px-6">
        <svg className="fill-[#FEC84B] -my-2" width="50" height="44" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.8479 0V0C26.2289 13.7985 37.3251 24.8947 51.1236 25.2757V25.2757V25.2757C37.3251 25.6567 26.2289 36.7529 25.8479 50.5513V50.5513V50.5513C25.4669 36.7529 14.3707 25.6567 0.572266 25.2757V25.2757V25.2757C14.3707 24.8947 25.4669 13.7985 25.8479 0V0Z"></path>
        </svg>
      </div>
    </span>
    <span className="absolute md:-left-[80px] bottom-0 md:bottom-[80px] -z-10">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#FEC84B] animate-pulse iconify iconify--octicon" width="22" height="22" viewBox="0 0 16 16">
        <path fill="currentColor" d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z"></path>
      </svg>
    </span>
    <div className="flex flex-col gap-6 bg-white boxed shadow-md p-8">
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-bold">Submit your GPT</p>
        <p className="text-gray-500 text-sm select-none">some cool text here</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <div className="text-gray-700 text-md select-none">Personal Information <div className='inline-block text-red-600'>*</div></div>
          <div className='tooltip-container'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/></svg>
            <div className="tooltip-text">
              <span className="block">Business name: (ex. Ibrohim Abdivokhidov)</span>
              <span className="block">Company url: (ex. https://linkedin.com/in/company/gpthub)</span>
              <span className="block">Email address: (ex. abdibrokhim@gmail.com)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            name="businessName"
            placeholder="Business name *"
            type="text"
            className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
          />
          <input
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            name="companyUrl"
            placeholder="Company url *"
            type="text"
            className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
          />
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email address *"
          type="email"
          className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
        />
        <div className="flex items-center gap-2 justify-between">
          <div className="text-gray-700 text-md select-none pt-4">GPT Information <div className='inline-block text-red-600'>*</div></div>
          <div className='tooltip-container'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/></svg>
            <div className="tooltip-text">
              <span className="block">Title: (ex. Spotius)</span>
              <span className="block">Tagline: (ex. Unveiling the Stories Behind the Music with AI-Powered Insights)</span>
              <span className="block">Description: (ex. Unveiling the Stories Behind the Music with AI-Powered Insights)</span>
              <span className="block">Image url: (ex. https://iili.io/J00NF1V.png)</span>
              <span className="block">Demo url: (ex. https://chat.openai.com/g/g-OIHssafR8-spotius)</span>
              <span className="block">Category: (ex. Lifestyle)</span>
            </div>
          </div>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Title *"
          type="text"
          className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
        />
        <input
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          name="tagline"
          placeholder="Tagline *"
          type="text"
          className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="Description *"
          className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
        />
        <div className="flex items-center gap-2">
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            name="image"
            placeholder="Image url *"
            type="text"
            className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
            />
          <input
            value={demoUrl}
            onChange={(e) => setDemoUrl(e.target.value)}
            name="demoUrl"
            placeholder="Demo url *"
            type="text"
            aria-rowcount={4}
            className="block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out"
            />
        </div>
        <div className="flex h-[46px] items-center bg-white !rounded w-full md:w-[170px] shrink-0">
          <Dropdown />
        </div>
      </div>
    </div>
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button 
          className="w-full cta-top flex text-center justify-center items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" 
          disabled={loading}
          type='submit'
        >
            <div className='text-center'>Send</div> 
        </button>
      </form>
    </div>
  </div>

     
      </div>  
      <Footer />
      </div>  
        
  );
}
