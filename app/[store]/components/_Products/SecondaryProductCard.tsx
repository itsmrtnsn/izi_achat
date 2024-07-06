import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductReview from './ProductReview';

const SecondaryProductCard = () => {
	return (
		<div className='space-y-1'>
			<ProductImage
				image_url={
					'https://images.unsplash.com/photo-1588511986609-328d6ecae609?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hYyUyMGJvb2slMjBwcm98ZW58MHx8MHx8fDA%3D'
				}
				image_alt=''
				className='rounded-md'
			/>
			<ProductReview averageReview={4.5} totalReviews={10} />
			<ProductPrice
				currentPrice={300.99}
				previousPrice={450.99}
				currency='HTG'
			/>
		</div>
	);
};
export default SecondaryProductCard;
