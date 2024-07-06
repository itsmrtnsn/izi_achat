import CategoryShowcase from './components/_Categories/CategoryShowcase';
import FlashSaleCard from './components/_FlashSales/FlashSaleCard';
import HomePageProductRecomandation from './components/_FlashSales/HomePageProductRecomandation';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const StoreHomePage = () => {
	return (
		<section>
			<div className='space-y-10 px-3'>
				<NavBar />
				<CategoryShowcase />
				<FlashSaleCard />
				<HomePageProductRecomandation />
			</div>
			{/* <div className='mt-10 space-y-10'></div> */}
			<div className='mt-10'>
				<Footer />
			</div>
		</section>
	);
};
export default StoreHomePage;
