

import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 ' >
      <div className='grid md:grid-cols-2 gap-20 items-center mb-32' >
        <div data-aos="fade-down">
         <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
         <p className='text-gray-500 pt-2' >
            I have a solid foundation in web development, specializing in HTML, CSS and JavaScript. My experience 
            extends to framewoorks like React and Next.Js to create dynamic and user-friendly applications. I&rsquo;m  
            also proficient in Tailwind Cssfor efficient styling and desing. With a passion for learning. I stay 
            updated on the latest technologies to enhance my skills set and contribute effectively to projects.
         </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
               <h2 data-aos="fade-down">TypeScript</h2>
               <h2 data-aos="fade-down">React.Js</h2>
               <h2 data-aos="fade-down">Next.Js</h2>
                </div>
                <div className='space-y-2'>
               <h2 data-aos="fade-down">Tailwind</h2>
               <h2 data-aos="fade-down">CSS</h2>
               <h2 data-aos="fade-down">Node.Js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

