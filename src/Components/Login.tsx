/** @format */

'use client'
import { signIn } from 'next-auth/react';

function Login() {
	return (
		<div className='bg-[#242424] h-screen flex flex-col items-center justify-center text-center'>
			<button
				onClick={() => signIn('google')}
				className='text-white font-bold text-3xl animate-pulse'>
				Click here to sign in and use the app!
			</button>
		</div>
	);
}

export default Login;
