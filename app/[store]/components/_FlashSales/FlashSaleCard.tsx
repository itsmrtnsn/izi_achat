import { Button } from '@/components/ui/button';

const FlashSaleCard = () => {
	return (
		<div>
			<div className='bg-black p-4 space-y-3 rounded-lg'>
				<p className='font-bold text-white'>Flash Sales</p>
				<p className='text-xs text-muted-foreground'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
					nobis!
				</p>
				<Button className='bg-white text-main bg-primary text-white'>
					Shop Now
				</Button>
			</div>

			<div></div>
		</div>
	);
};
export default FlashSaleCard;
