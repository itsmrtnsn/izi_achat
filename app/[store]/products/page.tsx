import { Fragment } from 'react';
import PrimaryProductCard from '../components/products/PrimaryProductCard';

const StoreProductPage = () => {
	const products = [
		{
			name: 'macbook pro 2021 13 inch',
			imageUrl:
				'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hYyUyMGJvb2slMjBwcm98ZW58MHx8MHx8fDA%3D',
			currentPrice: 10,
			previousPrice: 20,
			totalReviews: 10,
			averageReveview: 5,
		},
		{
			name: 'nike running shoes 2021',
			imageUrl:
				'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
			currentPrice: 10,
			previousPrice: 20,
			totalReviews: 10,
			averageReveview: 5,
		},
		{
			name: 'nike running shoes 2021',
			imageUrl:
				'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D',
			currentPrice: 45,
			previousPrice: 40,
			totalReviews: 10,
			averageReveview: 5,
		},
	];
	return (
		<div className='grid grid-cols-2 lg:grid-cols-6 gap-3 gap-y-5 m-2'>
			{products.map((product) => (
				<Fragment key={product.imageUrl}>
					<PrimaryProductCard product={product} />
				</Fragment>
			))}
		</div>
	);
};
export default StoreProductPage;
