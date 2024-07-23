import getRandomNumber from '../utils/getRandomNumber';
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';

const CookieBreaker = ({ setPhraseSelected, setBgSelected }) => {
	const nextPhrase = () => {
		const indexRandom = getRandomNumber(quotes.length);
		const phraseRandom = quotes[indexRandom];
		setPhraseSelected(phraseRandom);

		setBgSelected(photos[getRandomNumber(photos.length)]);
	};

	return (
		<button
			className="hover:scale-125 transition-transform cursor-pointer ml-auto block bg-red-400 py-2 px-4 rounded-xl text-white font-bold"
			onClick={nextPhrase}
		>
			Descubrir
		</button>
	);
};

export default CookieBreaker;
