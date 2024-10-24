import { FaBars, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const gnbArr = ['story', 'members', 'gallery', 'contact'];
	const snsArr = [FaEnvelope, FaInstagram, FaYoutube];
	const { pathname } = useLocation();

	return (
		<>
			<header className='header'>
				<h1 className='logo'>
					<Link to={'/'}>AVALLION</Link>
				</h1>

				<nav>
					<ul className='gnb'>
						{gnbArr.map((data, idx) => {
							return (
								<li key={idx} className={pathname === '/' + data ? 'on' : ''}>
									<Link to={'/' + data}>{data.toUpperCase()}</Link>
								</li>
							);
						})}
					</ul>

					<ul className='snsArr'>
						{snsArr.map((Data, idx) => (
							<li key={idx}>
								<Data />
							</li>
						))}
					</ul>
				</nav>

				<span className='btnMobile' onClick={setMenuToggle}>
					<FaBars />
				</span>
			</header>
		</>
	);
}
