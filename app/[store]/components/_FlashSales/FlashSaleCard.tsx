import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const FlashSaleCard = () => {
	return (
		<div>
			<div className='bg-black p-4 space-y-3 rounded-lg'>
				<p className='font-bold text-white'>Flash Sales</p>
				<p className='text-xs text-muted-foreground'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
					nobis!
				</p>

				<Link
					href='/store/products'
					className={cn(buttonVariants(), 'bg-primary text-white')}
				>
					Shop Now
				</Link>
			</div>

			<div></div>
		</div>
	);
};
export default FlashSaleCard;
