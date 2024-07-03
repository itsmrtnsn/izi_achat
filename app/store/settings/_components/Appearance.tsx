'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Appearance = () => {
	const { setTheme } = useTheme();

	return (
		<div className='grid grid-cols-1 px-3 md:grid-cols-2 gap-7 mx-auto mt-10 max-w-[60rem]'>
			<div
				className='border-primary cursor-pointer'
				onClick={() => setTheme('light')}
			>
				<div className='items-center rounded-md border-2 border-muted p-1 hover:border-accent'>
					<div className='space-y-2 rounded-sm bg-[#ecedef] p-2'>
						<div className='space-y-2 rounded-md bg-white p-2 shadow-sm'>
							<div className='h-2 w-[80px] rounded-lg bg-[#ecedef]' />
							<div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-[#ecedef]' />
							<div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-[#ecedef]' />
							<div className='h-2 w-[200px] rounded-lg bg-[#ecedef]' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-[#ecedef]' />
							<div className='h-2 w-[400px] rounded-lg bg-[#ecedef]' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-[#ecedef]' />
							<div className='h-2 w-[400px] rounded-lg bg-[#ecedef]' />
						</div>
					</div>
				</div>
				<p className='flex justify-center items-center text-xs gap-2 font-medium mt-3 text-muted-foreground'>
					<Sun strokeWidth={1} />
					<span>Light Mode</span>
				</p>
			</div>
			{/*  */}
			<div
				className='border-primary cursor-pointer'
				onClick={() => setTheme('dark')}
			>
				<div className='items-center rounded-md border-2 border-muted bg-popover p-1  hover:text-accent-foreground'>
					<div className='space-y-2 rounded-sm bg-slate-950 p-2'>
						<div className='space-y-2 rounded-md bg-slate-800 p-2 shadow-sm'>
							<div className='h-2 w-[80px] rounded-lg bg-slate-400' />
							<div className='h-2 w-[100px] rounded-lg bg-slate-400' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-slate-400' />
							<div className='h-2 w-[100px] rounded-lg bg-slate-400' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-slate-400' />
							<div className='h-2 w-[200px] rounded-lg bg-slate-400' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-slate-400' />
							<div className='h-2 w-[400px] rounded-lg bg-slate-400' />
						</div>
						<div className='flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm'>
							<div className='h-4 w-4 rounded-full bg-slate-400' />
							<div className='h-2 w-[400px] rounded-lg bg-slate-400' />
						</div>
					</div>
				</div>

				<p className='flex justify-center items-center text-xs gap-2 font-medium text-muted-foreground mt-3'>
					<Sun strokeWidth={1} />
					<span>Dark Mode</span>
				</p>
			</div>
		</div>
	);
};
export default Appearance;
