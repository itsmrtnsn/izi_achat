'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const AppearanceForm = () => {
	const { setTheme } = useTheme();

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
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
							<div className='h-2 w-[100px] rounded-lg bg-[#ecedef]' />
						</div>
					</div>
				</div>
				<span className='w-full p-2 text-center font-black flex gap-2 justify-center mt-3'>
					<Sun strokeWidth={1} />
					Light
				</span>
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
							<div className='h-2 w-[100px] rounded-lg bg-slate-400' />
						</div>
					</div>
				</div>
				<span className='w-full p-2 text-center flex gap-2 justify-center mt-3 font-black'>
					<Moon strokeWidth={1} />
					Dark
				</span>
			</div>
		</div>
	);
};
export default AppearanceForm;
