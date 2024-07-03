import { Fragment } from 'react';
import { departments } from '../../data/departemts';
import CategoryImage from './CategoryImage';
import Link from 'next/link';

const DepartmentGrid = () => {
	return (
		<div className='grid grid-cols-4 gap-y-5'>
			{departments.map(({ id, name }) => (
				<Fragment key={id}>
					<Link href='/'>
						<CategoryImage
							imgUrl={
								'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							imageAlt={name}
						/>
						<p className='line-clamp-1 text-xs mt-1  w-[4rem] text-center'>
							{name}
						</p>
					</Link>
				</Fragment>
			))}
		</div>
	);
};
export default DepartmentGrid;
