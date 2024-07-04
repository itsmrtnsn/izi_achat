import { Button } from '@/components/ui/button';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductReview from './ProductReview';

type Product = {
	name: string;
	imageUrl: string;
	currentPrice: number;
	previousPrice: number;
	totalReviews: number;
	averageReveview: number;
};

interface Props {
	product: Product;
}
const PrimaryProductCard = ({ product }: Props) => {
	return (
		<div className='p-2 shadow'>
			<ProductImage image_url={product.imageUrl} image_alt={product.name} />
			<div className='space-y-1.5 mt-2'>
				<p className='line-clamp-1 text-sm'>{product.name}</p>
				<ProductReview
					averageReview={product.averageReveview}
					totalReviews={product.totalReviews}
				/>
				<ProductPrice
					currentPrice={product.currentPrice}
					previousPrice={product.previousPrice}
					currency='USD'
				/>
				<Button className='w-full rounded-none bg-black'>Add to cart</Button>
			</div>
		</div>
	);
};
export default PrimaryProductCard;
