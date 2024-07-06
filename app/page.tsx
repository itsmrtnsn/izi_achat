import Link from 'next/link';
import NavBar from './store/components/NavBar';
import NavMenu from './store/components/NavMenu';

const HomePage = () => {
	return (
		<section>
			<div>
				<div className='hidden lg:block'>
					<NavMenu />
				</div>

				<div className='block lg:hidden'>
					<NavBar />
				</div>
			</div>

			{/* content */}

			<Link href='/store'>store</Link>
		</section>
	);
};
export default HomePage;
