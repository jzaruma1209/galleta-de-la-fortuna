import { useState } from 'react';
import './App.css';
import quotes from './data/phrases.json';
import getRandomNumber from './utils/getRandomNumber';
import Phrase from './components/Phrase';
import CookieBreaker from './components/CookieBreaker';
import photos from './data/photos.json';

function App() {
	const indexRandom = getRandomNumber(quotes.length);

	const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);

	const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)]);

	const objStyles = {
		backgroundImage: `url(/img/fondo${bgSelected}.jpg)`,
	};

	return (
		<div style={objStyles} className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4 gap-y-10">
			<h1 className="absolute text-3xl text-white top-20 uppercase font-black text-center drop-shadow-lg stroke ">Conoce Tu Fortuna</h1>
			<div className="cookie__animation max-w-[500px]  left-[70vh]">
				<img src="/fcookie.png" alt="fortune-cookie" />
			</div>
			<article className="max-w-[400px] bg-white p-4 rounded-xl shadow-2xl absolute bottom-[230px] ">
				<Phrase phraseSelected={phraseSelected} />
			</article>
			<article className="btn rounded-xl shadow-2xl absolute bottom-[110px] z-20">
				<CookieBreaker setPhraseSelected={setPhraseSelected} setBgSelected={setBgSelected} />
			</article>
			<footer className="absolute bottom-2 bg-indigo-950/75 p-5 rounded-lg text-white">
				<p>{phraseSelected.author}</p>
			</footer>
		</div>
	);
}

export default App;
