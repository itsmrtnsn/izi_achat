import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const OrderBy = () => {
	const sorts = [
		{ id: 1, name: 'Price: Low to High', code: 'low_to_high' },
		{ id: 2, name: 'Price: High to Low', code: 'hight_to_low' },
		{ id: 3, name: 'Newest Arrivals', code: 'new_arrivals' },
		{ id: 4, name: 'Best Sellers', code: 'best_sellers' },
	];
	return (
		<div>
			<Select>
				<SelectTrigger className='w-[auto]'>
					<SelectValue placeholder='Order By' />
				</SelectTrigger>
				<SelectContent>
					{sorts.map(({ id, name, code }) => (
						<SelectItem value={code} key={id}>
							{name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
export default OrderBy;
