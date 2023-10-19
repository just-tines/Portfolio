import React from 'react'
import Projects from '../assets/projects.jpg'

 const Project = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Projects} alt='Project_Name' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>WEB DEVELOPER - INTERNSHIP</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Barangay Management System</h1>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum lorem100 lorem100 loremlorem loremlorem
                        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum lorem100 lorem100 loremlorem loremlorem
                        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum lorem100 lorem100 loremlorem loremlorem
                        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum lorem100 lorem100 loremlorem loremlorem
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Notify Me</button>
                </div>
            </div>
        </div>
    )
}

export default Project;

