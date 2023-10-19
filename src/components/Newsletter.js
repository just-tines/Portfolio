import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full py-16 bg-gray-800 text-white'>
            <div className='max-w-full px-4 lg:px-8'>
                <div className='lg:flex lg:justify-between'>
                    <div className='lg:w-1/2 lg:pr-6'>
                        <h1 className='text-2xl lg:text-4xl font-bold mb-4'>Get the Latest Updates and Tips to Optimize Your Flow!</h1>
                        <p className='text-lg mb-6'>Subscribe to our newsletter and stay informed.</p>
                    </div>
                    <div className='lg:w-1/2 flex flex-col lg:flex-row items-center'>
                        <input
                            className='mb-2 lg:mb-0 p-3 rounded-md lg:rounded-l-md bg-white text-gray-900 focus:outline-none'
                            type='email'
                            placeholder='Enter your email...'
                        />
                        <button className='bg-green-500 text-white font-medium lg:rounded-r-md px-6 py-3'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <p className='mt-4 text-center lg:text-left'>
                    We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
};

export default Newsletter;

