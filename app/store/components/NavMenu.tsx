import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../utils/nav-links';
import DepartmentMenu from '../categories/_components/DepartmentMenu';
import Search from './Search';
import UserCart from './UserCart';
import UserProfile from './UserProfile';
const NavMenu = () => {
	return (
		<nav className='h-16 flex items-center justify-between px-5 bg-white dark:bg-_dark'>
			<div className='flex items-center space-x-3'>
				<Link href='/' className='pb-1.5'>
					<Image
						src='../assets/logo-white.svg'
						alt='logo'
						width={100}
						height={100}
						className='dark:hidden'
					/>
					<Image
						src='../assets/logo-dark.svg'
						alt='logo'
						width={100}
						height={100}
						className='hidden dark:block'
					/>
				</Link>
				<div className='flex items-center space-x-0.5'>
					<DepartmentMenu />
					<ul className='flex items-center gap-5'>
						{navLinks.map(({ id, label, href }) => (
							<li
								key={id}
								className='text-muted-foreground text-sm hover:dark:text-zinc-300 hover:text-[#3A2A00] dark:text-white transition-colors'
							>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				<Search />
				<UserProfile />
				<UserCart />
			</div>
		</nav>
	);
};
export default NavMenu;
