import { Headset, LucideProps, Shirt, Tag, Warehouse } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type NavLinks = {
	id: number;
	label: string;
	code: string;
	href: string;
	Icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
};

export const navLinks: NavLinks[] = [
	{
		id: 2,
		label: 'Deals',
		code: 'deals',
		href: '/store/deals',
		Icon: Tag,
	},
	{
		id: 3,
		label: 'Best Sellers',
		code: 'best_sellers',
		href: '/store/best-sellers',
		Icon: Shirt,
	},
	{
		id: 4,
		label: 'Customer Service',
		code: 'customer_service',
		href: 'store/customer-service',
		Icon: Headset,
	},
];
