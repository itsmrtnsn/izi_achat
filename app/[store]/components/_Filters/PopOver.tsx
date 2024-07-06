import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { ChevronDown } from 'lucide-react';

interface Props {
	title: string;
	children: React.ReactNode;
}

const PopOver = ({ title, children }: Props) => {
	return (
		<Popover>
			<PopoverTrigger className='border font-medium text-sm flex items-center gap-3 px-2 py-1 rounded-sm hover:bg-zinc-100 transition-all'>
				<span>{title}</span>
				<ChevronDown size={20} strokeWidth={1.5} className='font-bold' />
			</PopoverTrigger>
			<PopoverContent className='p-0 ml-2'>
				{children}
				<Separator />
				<div className='flex items-center justify-between p-2'>
					<Button className='rounded-sm' variant='ghost'>
						Cancel
					</Button>
					<Button className='bg-black hover:bg-zinc-800 transition rounded-sm'>
						Save
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};
export default PopOver;
