import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';
import { departments } from '../../data/departemts';
import CategoryImage from './CategoryImage';

const DepartmentMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className='text-muted-foreground text-sm hover:dark:text-white hover:text-[#3A2A00] transition-colors'>
						Departments
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]'>
							{departments.map(({ name, code, description }) => (
								<ListItem key={code} title={name} href={'/'}>
									{description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
export default DepartmentMenu;

// ListItem
const ListItem = forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					href=''
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='grid grid-cols-[auto_1fr] gap-2 items-center'>
						<CategoryImage
							imageAlt=''
							imgUrl='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						/>

						<div>
							<p className='text-sm font-medium leading-none'>{title}</p>
							<p className='line-clamp-2 text-xs leading-snug text-muted-foreground'>
								{children}
							</p>
						</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
