import NavBar from './store/components/NavBar';
import NavMenu from './store/components/NavMenu';

const HomePage = () => {
	return (
		<div className='__I-I__'>
			<div className='hidden lg:block'>
				<NavMenu />
			</div>

			<div className='block lg:hidden'>
				<NavBar />
			</div>
		</div>
	);
};
export default HomePage;
