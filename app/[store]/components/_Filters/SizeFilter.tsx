import { Button } from '@/components/ui/button';
import PopOver from './PopOver';

const SizeFilter = () => {
	const sizes = [
		{
			name: 'S',
			value: 's',
		},
		{
			name: 'M',
			value: 'm',
		},
		{
			name: 'L',
			value: 'l',
		},
		{
			name: 'XL',
			value: 'xl',
		},
	];
	return (
		<section>
			<p className='font-medium mb-3'>Sizes</p>
			<div className='flex items-center gap-3'>
				{sizes.map((size) => (
					<Button
						variant='outline'
						key={size.value}
						className='bg-primary text-white'
					>
						{size.name}
					</Button>
				))}
			</div>
		</section>
	);
};
export default SizeFilter;
