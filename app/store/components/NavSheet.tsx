import { navLinks } from '@/app/utils/nav-links';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import DepartmentGrid from '../categories/_components/DepartmentGrid';
import FollowUs from './FollowUs';

const NavSheet = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<AlignJustify strokeWidth={1.2} size={30} />
			</SheetTrigger>
			<SheetContent side='left' className='px-2.5'>
				<SheetDescription className='text-left mt-[2.5rem]'>
					<div className=' flex justify-between items-center pb-5'>
						<p className='text-lg font-black text-primary'>
							Shop by Department
						</p>
					</div>
					<DepartmentGrid />
					<ul className='mt-10'>
						{navLinks.map(({ id, label, Icon }) => (
							<li key={id} className='border-b mb-5 pb-1 flex gap-2.5'>
								<Icon strokeWidth={1.3} className='text-primary' />
								<span className='text-sm text-black dark:text-white'>
									{label}
								</span>
							</li>
						))}
					</ul>
				</SheetDescription>

				<div className='mt-[7rem] flex flex-col items-center space-y-2'>
					<p className='underline text-sm text-muted-foreground'>
						Follow & Get in touch with us
					</p>
					<FollowUs />
				</div>
			</SheetContent>
		</Sheet>
	);
};
export default NavSheet;
