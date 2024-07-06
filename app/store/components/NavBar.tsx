import Link from 'next/link';
import NavSheet from './NavSheet';
import Search from './Search';
import UserCart from './UserCart';
import UserProfile from './UserProfile';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const NavBar = () => {
	return (
		<nav className='pb-3 px-3 bg-primary'>
			<div className='h-14 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<NavSheet />
					<Link href='/' className='pb-1.5'>
						<Image
							src='../assets/logo-white.svg'
							alt='logo'
							width={90}
							height={90}
							className='dark:hidden'
						/>
						<Image
							src='../assets/logo-dark.svg'
							alt='logo'
							width={90}
							height={90}
							className='hidden dark:block'
						/>
					</Link>
				</div>
				{/*  */}
				<div className='flex items-center gap-3'>
					<UserProfile />
					<UserCart />
				</div>
			</div>
			{/* <Search /> */}
			<Input className='bg-white border-0' placeholder='Search Izi Achat' />
		</nav>
	);
};
export default NavBar;
