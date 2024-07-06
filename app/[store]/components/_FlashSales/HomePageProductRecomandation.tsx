import SecondaryProductCard from '../_Products/SecondaryProductCard';

const HomePageProductRecomandation = () => {
	return (
		<section>
			<p className='font-bold mb-3 text-primary'>Products you might like</p>
			<div className='grid grid-cols-2 gap-3 border p-4 rounded-md'>
				<SecondaryProductCard />
				<SecondaryProductCard />
				<SecondaryProductCard />
				<SecondaryProductCard />
			</div>
		</section>
	);
};
export default HomePageProductRecomandation;
