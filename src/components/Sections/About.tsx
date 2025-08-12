import {/*ArrowDownTrayIcon, */ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import React,{FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  /*const openPdf = () => {
    window.open('/Mission, Vision, Values and Goals Paper.pdf', '_blank');
  };*/

  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section
      className="relative flex h-full w-full bg-neutral-800 items-start"
      sectionId={SectionId.About}
    >
      {/* Main Grid Layout */}
      <div className="w-full grid grid-cols-2 grid-rows-auto gap-6 h-full">
        {/* Row 1, Column 1: Profile Image */}
        <div className="flex justify-center items-center">
          {profileImageSrc && (
            <div className="relative h-half w-half overflow-hidden rounded-xl">
              <Image
                alt="about-me-image"
                className="object-cover h-full w-full"
                height={256}
                src={profileImageSrc}
                width={256}
              />
            </div>
          )}
        </div>

        {/* Row 1, Column 2: About Description */}
        <div className="flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300 text-center">{description}</p>
        </div>

        {/* Row 2: Full-Width Image */}
        <div className="col-span-2">
          <Image
            alt="about-me-image-3"
            className="object-cover w-half h-haf rounded-xl"
            height={96}
            layout="responsive" // Ensures responsive resizing
            src="/ZonaWedding.jpg"
            width={384}
          />
        </div>
      </div>

      {/* About Items List */}
      <div className="flex w-full justify-center mt-5 mb-5 items-center">
        <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {aboutItems.map(({label,text,Icon}, idx) => (
            <li className="col-span-1 flex items-start gap-x-2" key={idx}>
              {Icon && <Icon className="h-5 w-5 text-white" />}
              <span className="text-sm font-bold text-white">{label}:</span>
              <span className="text-sm text-gray-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PDF Download Button */}
      {/* <div className="flex justify-center">
        <button
          className="flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={openPdf}
        >
          Mission, Vision, Values, Goals
          <ArrowDownTrayIcon className="h-5 w-5" />
        </button>
      </div> */}

      {/* Scroll Down Button */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <a
          className="rounded-full bg-white p-2 ring-2 ring-gray-700 focus:outline-none"
          href={`/#${SectionId.Strengths}`}
        >
          <ChevronDownIcon className="h-6 w-6 text-gray-700" />
        </a>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
