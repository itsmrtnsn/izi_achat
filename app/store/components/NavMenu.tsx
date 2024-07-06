import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../../utils/nav-links';
import DepartmentMenu from '../categories/_components/DepartmentMenu';
import Search from './Search';
import UserCart from './UserCart';
import UserProfile from './UserProfile';
const NavMenu = () => {
	return (
		<nav className='h-16 flex items-center justify-between px-5 bg-primary dark:bg-_dark'>
			<div className='flex items-center space-x-3'>
				<Link href='/' className='text-white font-black tracking-wide'>
					{/* <Image
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
					/> */}
					Izi Achat
				</Link>
				<div className='flex items-center space-x-0.5'>
					<DepartmentMenu />
					<ul className='flex items-center gap-6'>
						{navLinks.map(({ id, label, href }) => (
							<li
								key={id}
								className='text-main text-sm hover:text-white transition-colors'
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
