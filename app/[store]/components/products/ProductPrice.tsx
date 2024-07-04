interface Props {
	currentPrice: number;
	previousPrice: number;
	currency: string;
}

const ProductPrice = ({ currentPrice, previousPrice, currency }: Props) => {
	return (
		<div className='flex gap-2.5 items-center'>
			<p className='font-medium'>
				<span className='mr-0.5 text-xs font-thin'>{currency}</span>
				{currentPrice.toFixed(2)}
			</p>
			{previousPrice > currentPrice && (
				<p className='text-xs font-thin line-through text-red-400'>
					<span className='mr-0.5'>{currency}</span>
					{previousPrice.toFixed(2)}
				</p>
			)}
		</div>
	);
};
export default ProductPrice;
