import React from 'react'

const AboutPage = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome!</h1>
      <p className="text-base md:text-lg mb-6">
        I am a versatile Software Engineer with a passion for technology. 
        Specializing in full-stack software engineering, with a background in 
        project management, I approach all challenges with an open-mind and a 
        unique amount of grit and persistence. My journey in tech is fueled by 
        a relentless pursuit of knowledge and a deep commitment to helping 
        clients transform their visions into reality. Whether you are looking 
        for an expert to lead your software project or need a creative mind 
        to help you solve business challenges, you have come to the right place. 
        Lets collaborate to create something extraordinary!
      </p>
      <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />
      <ul className="list-none space-y-3">
        <li className="text-lg">
          GitHub: <a href="https://www.github.com/matthew-peterson-39/" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">@matthew-peterson-39</a>
        </li>
        <li className="text-lg">
          LinkedIn: <a href="https://www.linkedin.com/in/matthew-peterson-tech/" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">@matthew-peterson-tech</a>
        </li>
        <li className="text-lg">
          Email: <a href="mailto:matthew.s.peterson.39@gmail.com" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">matthew.s.peterson.39@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;