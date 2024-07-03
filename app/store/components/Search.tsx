'use client';

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';

const Search = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<div>
			<SearchButton onClick={() => setOpen(true)} />
			<div className='max-w-4'>
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder='Type a command or search...' />
					<CommandList>
						<CommandEmpty>
							<p className='text-xs text-muted-foreground'>
								We&#39;ve Found Nothing That Matches Your Search Cateria.
							</p>
						</CommandEmpty>
						<CommandGroup heading='Suggestions'>
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</div>
		</div>
	);
};

export default Search;
