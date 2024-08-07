import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BookHeart, Cog, Mail, Package, Wallet, Warehouse } from 'lucide-react';
import Link from 'next/link';
import UserAvatar from './UserAvatar';

const UserProfile = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UserAvatar imgUrl='' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[16.5rem] mr-2 lg:mr-5 mt-1 lg:mt-4'>
				<div className='border rounded-md px-2 py-2 bg-white dark:bg-_dark mb-3'>
					<article className='flex items-center gap-1 mb-2'>
						<UserAvatar imgUrl='' />
						<div className='pb-'>
							<p className='text-xs font-bold'>Mortensen Ulysse</p>
							<p className='text-xs text-muted-foreground'>
								mrtnsn2001@gmail.com
							</p>
						</div>
					</article>

					<Button className='w-full bg-primary'>Sign Out</Button>
				</div>
				<DropdownMenuGroup>
					<Link href='/profile'>
						<DropdownMenuItem className='cursor-pointer'>
							<Package strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Orders</span>
						</DropdownMenuItem>
					</Link>
					<Link href='/profile'>
						<DropdownMenuItem className='cursor-pointer'>
							<BookHeart strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Wish list</span>
						</DropdownMenuItem>
					</Link>
					<Link href='/profile'>
						<DropdownMenuItem className='cursor-pointer'>
							<Wallet strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Wallet</span>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuSeparator />
					<Link href='/profile'>
						<DropdownMenuItem className='cursor-pointer'>
							<Warehouse strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Create Store</span>
						</DropdownMenuItem>
					</Link>
					<Link href='/profile'>
						<DropdownMenuItem className='cursor-pointer'>
							<Mail strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Messages</span>
						</DropdownMenuItem>
					</Link>
					<Link href='/store/settings'>
						<DropdownMenuItem className='cursor-pointer'>
							<Cog strokeWidth={0.75} className='text-primary' />
							<span className='ml-2 text-main'>Settings</span>
						</DropdownMenuItem>
					</Link>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default UserProfile;
