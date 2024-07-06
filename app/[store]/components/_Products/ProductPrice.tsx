import { cn } from '@/lib/utils';

interface Props {
	currentPrice: number;
	previousPrice: number;
	currency: string;
}

const ProductPrice = ({ currentPrice, previousPrice, currency }: Props) => {
	return (
		<div className='flex gap-2 items-center'>
			<p
				className={cn('font-medium', {
					'text-green-700': currentPrice < previousPrice,
				})}
			>
				<span className='mr-0.5 text-xs font-thin'>{currency}</span>
				{currentPrice.toFixed(2)}
			</p>
			{previousPrice > currentPrice && (
				<p className='text-xs line-through text-zinc-400'>
					<span className='mr-0.5'>{currency}</span>
					{previousPrice.toFixed(2)}
				</p>
			)}
		</div>
	);
};
export default ProductPrice;
