import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SlidersHorizontal } from 'lucide-react';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import PriceFilter from './PriceFilter';
import GenderFilter from './GenderFilter';

interface Props {
	children: React.ReactNode;
}

const FilterDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<Button asChild className='shadow-none px-2' variant='outline'>
					<p className='space-x-1.5'>
						<SlidersHorizontal size={16} strokeWidth={0.75} />
						<span className='text-xs'>Filter By</span>
					</p>
				</Button>
			</DrawerTrigger>
			<DrawerContent className='h-[600px]'>
				<ScrollArea className='h-[600px] px-4'>
					<div className='space-y-12 mt-5'>
						<GenderFilter />
						<SizeFilter />
						<PriceFilter />
						<ColorFilter />
					</div>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	);
};
export default FilterDrawer;
