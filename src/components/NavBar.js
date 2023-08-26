import React from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/Logo';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <div className={`relative ${className}`}>
      <span className="cursor-pointer">{title}</span>
      <span
        className={`h-[1px] w-0 bg-dark absolute bottom-[-2px] left-0 right-0 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } transition-all duration-300`}
      ></span>
    </div>
  );
};

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>    
      <nav>
        <CustomLink href='/' title="Home" className='mr-4'/>
        <CustomLink href='/about' title="About" className='mr-4'/>
        <CustomLink href='/projects' title="Projects" className='mr-4'/>
        <CustomLink href='/articles' title="Articles" className='mr-4' />
      </nav>
      
      <nav>
        <a href='/' target="_blank">Linkedin</a>
        <a href='/' target="_blank">Medium</a>
        <a href='/' target="_blank">Youtube</a>
        <a href='/' target="_blank">Github</a>
        <a href='/' target="_blank">Photography</a>
        <a href='/' target="_blank">1:1</a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo /> {/* Use the Logo component here */}
      </div>
    </header>
  );
};

export default NavBar;
