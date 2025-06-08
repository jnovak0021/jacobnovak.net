//import {ChevronDownIcon,ArrowDownTrayIcon} from '@heroicons/react/24/outline';
//import classNames from 'classnames';
///import Image from 'next/image';
import {/*ArrowTrendingUp,*/ArrowDownTrayIcon,ChevronDownIcon} from '@heroicons/react/24/outline';
//import "@flaticon/flaticon-uicons/css/all/all";
import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
//import Socials from '../Socials';

//const Strengths: FC = memo(() => {
  //const {imageSrc, name, description, actions} = heroData;
  const Strengths: FC = memo(() => {
    const openStrengthsReport = () => {
        window.open('/Strengths-Report.pdf', '_blank');
    };
    return (
        <Section className="bg-white h-full" sectionId={SectionId.Strengths}>
            <div className="-mt-20 items-start text-center">
                <h2 className="text-stone-xl text-3xl p-10">Top Strengths According to Cliffton Strengths</h2>
                <div className='mb-10'>
                    <div className="flex text-black-100 gap-0 p-0">
                    <div className="grid grid-cols-3 grid-rows-1 gap-6 p-0">
                        <div className="flex flex-col items-center border rounded-lg p-4 text-black gap-2 h-48">
                            <Image 
                                alt="about-me-image-1"
                                className="object-cover w-10 h-10"
                                height={40}
                                src="/futurisitic.png"  
                                width={40}
                            />
                            <strong className="text-black-100 text-center">Futuristic<br /></strong>
                            <p className="text-center">
                                You are inspired by the future and what could be. You energize others with your visions of the future.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border rounded-lg p-4 text-black gap-2 h-48">
                            <Image 
                                alt="about-me-image-1"
                                className="object-cover w-10 h-10"
                                height={40}
                                src="/arranger.png"  
                                width={40}
                            />
                            <strong className="text-black-100 text-center">Arranger<br /></strong>
                            <p className="text-center">
                                Ability to organize all pieces and resources for maximum productivity.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border rounded-lg p-4 text-black gap-2 h-48">
                            <Image 
                                alt="about-me-image-1"
                                className="object-cover w-10 h-10"
                                height={40}
                                src="/achiever.png"  
                                width={40}
                            />
                            <strong className="text-black-100 text-center">Achiever<br /></strong>
                            <p className="text-center">
                                You work hard and possess a great deal of stamina. You take immense satisfaction in being busy and
                                productive
                            </p>
                        </div>
                
                        </div>
                    </div>
                    <div className="flex text-black-100 gap-0 p-0">
                        <div className="grid grid-cols-2 grid-rows-1 gap-6 p-0">
                            <div className="flex flex-col items-center border rounded-lg p-4 text-black gap-2 h-48">
                                <Image 
                                    alt="about-me-image-1"
                                    className="object-cover w-10 h-10"
                                    height={40}
                                    src="/learner.png"  
                                    width={40}
                                />
                                <strong className="text-black-100 text-center">Learner<br /></strong>
                                <p className="text-center">
                                You have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites you.
                                </p>
                            </div>
                            <div className="flex flex-col items-center border rounded-lg p-4 text-black gap-2 h-48">
                                <Image 
                                    alt="about-me-image-1"
                                    className="object-cover w-10 h-10"
                                    height={40}
                                    src="/belief.png"  
                                    width={40}
                                />
                                <strong className="text-black-100 text-center">Belief<br /></strong>
                                <p className="text-center">
                                    You have certain core values that are unchanging. Out of these values emerges a defined purpose for your life.
                                </p>
                            </div>
   
                        </div>
                    </div>
                </div>
                <div className="flex center w-full justify-center text-center">
                    <button 
                        className='flex rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-black ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base'     
                        onClick={openStrengthsReport}>
                        View Cliffton Strengths Report
                        <ArrowDownTrayIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
                    </button>
                    
                </div>
                <div className="relative mt-10  flex items-start text-center justify-center">
                    <a
                
                    className="rounded-full bg-white p-2 ring-2 ring-gray-700 focus:outline-none"
                    href={`/#${SectionId.Testimonials}`}
                    >
                    <ChevronDownIcon className="h-6 w-6 text-gray-700" />
                    </a>
                </div>
   

            </div>
        </Section>
    );
});

export default Strengths;
