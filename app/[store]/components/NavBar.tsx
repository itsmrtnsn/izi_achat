import {
	AlignCenter,
	AlignLeft,
	Bell,
	MapPin,
	Search,
	ShoppingBag,
} from 'lucide-react';
import NavSheet from './NavSheet';

const NavBar = () => {
	return (
		<nav className='space-y-3.5 mt-3'>
			<div className='flex justify-between items-center'>
				<div className='bold flex items-center gap-3'>
					<NavSheet />
					<p className='font-bold'>Mini Mart</p>
				</div>
				<div className='flex items-center gap-4'>
					<Bell strokeWidth={0.75} />
					<ShoppingBag strokeWidth={0.75} className='s' />
				</div>
			</div>

			<div
				className='border flex items-center justify-between h-10 p-2 cursor-pointer text-muted-foreground rounded-md'
				aria-disabled
			>
				<p className='flex items-center gap-1 text-xs tracking-wide text-muted-foreground'>
					<Search strokeWidth={1} size={18} />
					<span>Search for Anything ...</span>
				</p>
				<p className='flex items-center gap-1'>
					<span>|</span>
					<span>
						<AlignCenter strokeWidth={1} size={20} />
					</span>
				</p>
			</div>
			<div className='flex items-center gap-1'>
				<MapPin strokeWidth={2} size={22} className='text-primary' />
				<p className='flex items-center gap-1 text-xs line-clamp-1'>
					<span className='text-muted-foreground line-clamp-1'>
						Delivered to
						<span className='text-black ml-1'>
							Haiti - Delmas 31 rue Jacques 1er #19 Haiti - Delmas 31 rue
							Jacques 1er #19
						</span>
					</span>
				</p>
			</div>
		</nav>
	);
};
export default NavBar;
