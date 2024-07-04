import { cn } from '@/lib/utils';
import PopOver from './PopOver';
import { Check } from 'lucide-react';

const ColorFilter = () => {
	const colors = [
		{
			id: 1,
			name: 'red',
			hex: '#ff0000',
		},
		{
			id: 2,
			name: 'blue',
			hex: '#0000ff',
		},
		{
			id: 2,
			name: 'blue',
			hex: '#0000ff',
		},
		{
			id: 2,
			name: 'blue',
			hex: '#0000ff',
		},
		{
			id: 2,
			name: 'blue',
			hex: '#0000ff',
		},
		{
			id: 2,
			name: 'blue',
			hex: '#0000ff',
		},
		{
			id: 3,
			name: 'green',
			hex: '#00ff00',
		},
		{
			id: 4,
			name: 'yellow',
			hex: '#ffff00',
		},
		{
			id: 5,
			name: 'black',
			hex: '#000000',
		},
		{
			id: 5,
			name: 'black',
			hex: '#000000',
		},
	];
	return (
		<div>
			<p className='font-medium mb-3'>Colors</p>
			<ul className='flex gap-3 flex-wrap'>
				{colors.map((color) => (
					<li
						key={color.id}
						style={{ backgroundColor: color.hex }}
						className={cn(
							'rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-[#fff] hover:opacity-80 transition-opacity duration-200'
						)}
					>
						<Check size={18} strokeWidth={1.5} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default ColorFilter;
