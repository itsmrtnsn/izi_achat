import CategoryShowcase from './components/_Categories/CategoryShowcase';
import FlashSaleCard from './components/_FlashSales/FlashSaleCard';
import NavBar from './components/NavBar';

const StoreHomePage = () => {
	return (
		<div className='mx-3'>
			<NavBar />
			<div className='mt-10 space-y-5'>
				<CategoryShowcase />
				<FlashSaleCard />
			</div>
		</div>
	);
};
export default StoreHomePage;
