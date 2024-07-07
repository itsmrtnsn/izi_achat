import { ArrowRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import Link from 'next/link';

const CategoryShowcase = () => {
	const categories = [
		{
			id: 1,
			name: 'Beauty',
			url: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: 1,
			name: 'Beauty',
			url: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGplYW5zfGVufDB8fDB8fHww',
		},
		{
			id: 1,
			name: 'Beauty',
			url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: 1,
			name: 'Beauty',
			url: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D',
		},
	];
	return (
		<section>
			<div className='flex items-center justify-between mb-5'>
				<p className='font-bold text-primary'>Popular Categories</p>

				<p className='text-muted-foreground text-xs flex items-center underline'>
					<Link href='/store/categories'> View All Categories</Link>
					<span className='ml-1'>
						<ArrowRight strokeWidth={1} size={15} />
					</span>
				</p>
			</div>
			<div className='grid grid-cols-2 gap-x-2.5 gap-y-3'>
				{categories.map((category) => (
					<article key={category.id}>
						<div className='border p-2 rounded-md'>
							<CategoryCard imgUrl={category.url} category={category.name} />
						</div>
						<p className='text-xs text-center text-muted-foreground font-medium mt-1.5 line-clamp-1'>
							{category.name}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};
export default CategoryShowcase;
