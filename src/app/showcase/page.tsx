'use client'

import '../globals.css';
import Image from 'next/image';
import {logo} from '../shared';
import Footer from '../footer';
import brain from '../../app/assets/brain.png';
import verified from '../../app/assets/verified.gif';
import loadingGif from '../../app/assets/loading.gif';
import heartWhite from '../../app/assets/heart-white.gif';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from '../firebase-config';
import { useEffect, useState } from 'react';
import { GptData } from './types';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);


export default function Showcase()
{ 

  const [gpt, setGpt] = useState<GptData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGpts = async () => {
      setLoading(true);
  
      const querySnapshot = await getDocs(collection(db, 'gpts'));
      const gptsData: GptData[] = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data() as GptData;
        if (docData.isApproved) {
          gptsData.push(docData);
        }
      });
      setGpt(gptsData);
  
      setLoading(false);
    };
  
    fetchGpts();
  
  }, []);
  

  function Card({image, title, description, creator, demoUrl, isSponsored} : {image: any, title: string, description: string, creator: string, demoUrl: string, isSponsored: boolean}) {
    return (
    <div className="boxed bg-white p-6 shadow-md shadow-red-500 flex flex-col gap-4 relative">
      <div className="flex flex-row gap-4">
        <div className="flex-none">
          <Image
            src={image}
            width={300}
            height={300}
            alt="Illustration of a brain"
            className="max-w-[100px] img-shadow" 
            title="Illustration of a brain"
          />
        </div>
        <div className="flex-grow flex flex-col gap-1">
          <p className="font-title !font-medium text-xl text-gray-700">{title}</p>
          <p className="text-gray-700 text-sm">{description}</p>
          <nav className="text-gray-700">
            <ul className="text-sm">
              <li className="flex items-center gap-2">
                <p>{creator}</p>
                <div className="md:inline-block">
                  <Image
                    src={verified}
                    width={20}
                    height={20}
                    alt="Verified icon"
                    className="max-w-[20px] img-shadow" 
                    title="Verified icon"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-row flex-grow justify-center gap-4">
        <div className="flex justify-start items-center gap-2 mt-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
              <div className="flex flex-1 tooltip-container">
                <a className="cta-top flex gap-2 items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-6 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-6 !h-[44px]" 
                  href="/sponsor">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 50" version="1.1" width="30px" height="30px" fill="currentColor" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M 10.5,8.5 C 15.6091,7.80275 20.2758,8.80275 24.5,11.5C 28.7332,8.6383 33.3999,7.80497 38.5,9C 41,10.1667 42.8333,12 44,14.5C 45.2663,20.595 44.2663,26.2616 41,31.5C 35.9309,36.405 30.4309,40.7384 24.5,44.5C 17.5447,40.0423 11.3781,34.709 6,28.5C 4.52357,23.9241 4.19024,19.2574 5,14.5C 6.35968,11.9774 8.19301,9.97739 10.5,8.5 Z M 12.5,11.5 C 17.6912,10.467 21.6912,12.1337 24.5,16.5C 28.1345,11.4289 32.8011,10.2623 38.5,13C 42.326,17.9711 42.4926,23.1378 39,28.5C 34.6146,33.7371 29.4479,37.5704 23.5,40C 17,36.1667 11.8333,31 8,24.5C 6.3794,18.9227 7.8794,14.5894 12.5,11.5 Z"/></g></svg>
                  <p className="whitespace-nowrap">Sponsor</p>
                  <div className="tooltip-text-secondary">
                    <span className="block">Sponsor this GPT to get more visibility and reach a wider audience.</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 mt-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
              <div className="flex flex-1 tooltip-container">
                <a className="cta-top flex gap-2 items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-6 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-6 !h-[44px]" 
                  target='_blank'
                  href={demoUrl}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24px" height="24px" fill='currentColor'><path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"/></svg>
                  <p className="whitespace-nowrap">Try it</p>
                  <div className="tooltip-text-secondary">
                    <span className="block">Try this GPT now and see it in action.</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSponsored &&
        <div className="flex flex-row flex-grow justify-start gap-4">
          <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-[11px] font-semibold">
            Sponsored
          </div>
        </div>
      }
    </div>
    

    )
  }


  return (
    
    <div className="flex flex-col w-full">

      <nav className="w-full pt-4">
        
        <div className="navbar w-full relative !h-16 border-b-[1px] border-gray-700 px-8 md:px-0">
          <div className="flex justify-between items-center m-auto w-full md:w-4/5 2xl:w-3/5 relative">
            <div className="flex items-center gap-2">
              <a className="btn !border-0 bg-transparent px-0 mx-4 text-gray-700 text-xl font-black" href="/">
              {logo}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-blue-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/">
                <p className="whitespace-nowrap">Home</p>
              </a>
              <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-green-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/submit-gpt">
                <p className="whitespace-nowrap">Submit GPT</p>
              </a>
              <a className="cta-top flex items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[14px] px-4 h-[40px] shrink-0 grow-0 btn hover:opacity-80 !bg-gray-800 !text-white !bg-none !text-[14px] px-4 !h-[44px]" href="/contact">
                <p className="whitespace-nowrap">Book Demo</p>
              </a>
            </div>
          </div>
        </div>
    
    
       </nav>

      <main className="flex-1 flex flex-col gap-16 px-4 md:px-0 py-24 m-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="flex flex-col justify-center md:flex-row md:items-center gap-16">
          <div className="text-center flex flex-col gap-4 pt-4">
            <div className="w-full relative z-10"> 
              <div className="leading-none z-10 text-[42px] text-gray-700"> 
                <span>Versatile GPT Solutions for your Business</span> 
              </div> 
              <span className="absolute right-2 -bottom-2 md:right-4 md:bottom-2 -z-10"></span> 
            </div>
            <div className="w-full"> 
              <span className="flex flex-col gap-2 text-gray-500 text-[16px]">
                <p>Find the perfect GPT for your business, with a wide range of features and capabilities to choose from.</p>
              </span> 
            </div>
            <div className="flex justify-start items-center gap-2 mt-4">
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 w-full">
                  <div className="flex w-full">
                    <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Search..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex flex-col gap-6">
            {
              loading &&
                <div className="flex w-full block justify-center items-center">
                  <Image
                    src={loadingGif}
                    width={50}
                    height={50}
                    alt="Verified icon"
                    className="max-w-[50px] img-shadow" 
                    title="Verified icon"
                  />
                </div>
            }
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gpt.map((gptItem, index) => (
              <div key={index}>
                <Card 
                  image={gptItem.image}
                  title={gptItem.title}
                  description={gptItem.tagline}
                  creator={gptItem.created_by}
                  demoUrl={gptItem.demo_url}
                  isSponsored={gptItem.isSponsored}
                />
              </div>
            ))}
          </div>
          <div className="self-stretch flex w-full justify-start md:justify-between md:items-center flex-col gap-6 md:flex-row md:gap-8 pt-8">
            <div className="flex flex-col gap-1">
              <p className="font-title !font-medium text-2xl text-gray-700">Do you have a GPT?</p>
              <p className="text-gray-700">{`We'd be happy to learn more about your GPT and include it here!`}</p>
            </div>
            <div className="shrink-0">
              <div className="flex flex-1">
                <a className="cta-top flex gap-2 items-center rounded-md hover:opacity-80 active:opacity-60 active:scale-95 transition-all text-white text-[16px] px-6 h-[40px] shrink-0 grow-0 bg-green-800" href="/submit-gpt">
                  <p className="whitespace-nowrap">Submit a GPT</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
   ); 
}
