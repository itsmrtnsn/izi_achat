import CategoryShowcase from './components/_category/CategoryShowcase';
import NavBar from './components/NavBar';

const StoreHomePage = () => {
	return (
		<div className='mx-3'>
			<NavBar />
			<div className='mt-10'>
				<CategoryShowcase />
			</div>
		</div>
	);
};
export default StoreHomePage;
