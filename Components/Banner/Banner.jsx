import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from 'react-icons/fa6';
import hero from '../../assets/hero.png'


const Banner = () => {
	return (
		<div className='text-center mt-20'>
			<h3 className='text-6xl font-bold mb-4'>We Build <br /> <span className='bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h3>
			<p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
				<br />Our goal is to turn your ideas into digital experiences that truly make an impact.
			</p>
			<div className='mt-10 flex justify-center gap-4 flex-wrap'>
  
  <a
    href="https://play.google.com/store/games?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-200"
    style={{
      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
      boxShadow: '0 0 10px rgba(34,197,94,0.3)'
    }}
  >
    <FaGooglePlay className="text-lg" />
    Google Play
  </a>

  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-200"
    style={{
      background: 'linear-gradient(135deg, #111827, #374151)',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
    }}
  >
    <FaAppStoreIos className="text-lg" />
    App Store
  </a>

</div>
			<div className='mx-28 mt-10'>
				<img src={hero} alt="hero" />
			</div>
			<div className='border' style={{backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)`}}>
				<div className='text-2xl font-bold text-white mt-14 mb-10'>
					<h3>Trusted by Millions, Built for You</h3>
				</div>
				<div className='flex justify-around mb-10 text-white'>
					<div>
						<p>Total Downloads</p>
						<h3 className='text-4xl font-bold'>29.6M</h3>
						<p>21% more than last month</p>
					</div>
					<div>
						<p>Total Reviews</p>
						<h3 className='text-4xl font-bold'>906K</h3>
						<p>46% more than last month</p>
					</div>
					<div>
						<p>Active Apps</p>
						<h3 className='text-4xl font-bold'>132+</h3>
						<p>31 more will Launch</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;