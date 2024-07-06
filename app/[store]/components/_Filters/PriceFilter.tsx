'use client';
import { Slider } from '@/components/ui/slider';
import PopOver from './PopOver';
import { useState } from 'react';

const PriceFilter = () => {
	const minPrice = 1000;
	const maxPrice = 5000;

	const [range, setRange] = useState<number | undefined>(minPrice);

	return (
		<section>
			<p className='font-medium mb-3'>Price</p>
			<div className=''>
				<Slider
					defaultValue={[minPrice]}
					min={minPrice}
					max={maxPrice}
					step={1}
					onValueChange={(value) => setRange(value[0])}
				/>
				<p className='mt-3 text-sm text-muted-foreground'>
					${minPrice} - ${range ? range : maxPrice}
				</p>
			</div>
		</section>
	);
};
export default PriceFilter;
