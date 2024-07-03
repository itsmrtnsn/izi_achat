'use client';

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Props {
	onClick: () => void;
}

const SearchButton = ({ onClick }: Props) => {
	return (
		<Button
			variant='outline'
			className='shadow-none text-muted-foreground text-xs w-full lg:w-[20rem] tracking-wide font-light justify-between px-3'
			onClick={onClick}
		>
			<p className='flex items-center gap-1 tracking-wide'>
				<Search strokeWidth={1} size={15} />
				What are you looking for Joe ?
			</p>
			<p className='text-xs text-muted-foreground'>
				<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
					<span className='text-xs'>⌘</span>k
				</kbd>
			</p>
		</Button>
	);
};
export default SearchButton;
