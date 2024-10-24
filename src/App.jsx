import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Story from './pages/Story';
import Gallery from './pages/Gallery';
import Member from './pages/Member';
import Post from './pages/Post';
import Youtube from './pages/Youtube';

function App() {
	return (
		<>
		<Home />
			<Header />
			<Story />
			<Member />
			<Gallery />
			<Youtube />
			<Contact />
			<Post />
			<Footer />
		</Home>
	);
}

export default App;
