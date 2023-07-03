/** @format */
'use client'

import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from '../Components/Login';
import { Session } from 'next-auth';


function Main() {
	const [nasaImage, setNasaImage] = useState('');

	const [loading, setLoading] = useState(true)

  useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.nasa.gov/planetary/apod?api_key=rBvhjg3IbSPLLPwsV05lSZ9t1qFoZBgna6U1W8KT`
				);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setNasaImage(data.url);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching NASA data:', error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	
	return (
		<div className='p-[10vw]'>
			
					<div className='flex'>
						<div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'></div>
						<h1 className='flex items-center text-xl'>NASA Image of the Day</h1>
						{nasaImage && <img className='flex' src={nasaImage} alt='NASA Image' />}
					</div>
			
		</div>
	);
}

export default Main;
