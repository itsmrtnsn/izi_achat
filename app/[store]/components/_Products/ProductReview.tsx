import ProductReviewIcon from './ProductReviewIcon';

interface ProductReviewProps {
	averageReview: number;
	totalReviews: number;
	iconSize?: number;
}

const ProductReview = ({
	averageReview,
	totalReviews,
	iconSize,
}: ProductReviewProps) => {
	return (
		<div className='flex items-center space-x-3 cursor-pointer'>
			<ProductReviewIcon averageReview={averageReview} size={iconSize} />
			<p className='text-xs font-mono font-medium hover:underline'>
				({totalReviews})
			</p>
		</div>
	);
};

export default ProductReview;
