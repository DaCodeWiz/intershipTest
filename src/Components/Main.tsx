/** @format */
'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';


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
		<div className='flex items-center content-center p-[10vw] h-screen w-screen'>
					<div className='items-center content-center'>
						<h1 className='content-center text-xl'>NASA Image of the Day</h1>
						{nasaImage && <img className='flex-initial content-center h-[40vw]' src={nasaImage} alt='NASA Image' />}
						<h3 className='content-end text-xl pl-[10vw]'>There is nothing flashy about this. But NASAs API, that is linked <Link className='underline' href='http://api.nasa.gov'>Here</Link> Is what I used to build this, along with NextJs / React, Mongo Cloud, Firebase.</h3>
					</div>
		</div>
	);
}

export default Main;
