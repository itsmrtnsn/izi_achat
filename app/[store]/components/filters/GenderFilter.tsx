import { Checkbox } from '@/components/ui/checkbox';

const GenderFilter = () => {
	const genders = [
		{ id: 1, name: 'Men', totalItems: 100 },
		{ id: 2, name: 'Women', totalItems: 50 },
		{ id: 3, name: 'Unisex', totalItems: 30 },
	];
	return (
		<section>
			<p className='font-medium mb-3'>Genders</p>
			<ul className='space-y-3'>
				{genders.map((gender) => (
					<li key={gender.id} className='flex gap-3'>
						<Checkbox className='w-5 h-5' />
						<p>
							{gender.name}
							<span className='ml-1 text-xs text-muted-foreground'>
								({gender.totalItems})
							</span>
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};
export default GenderFilter;
