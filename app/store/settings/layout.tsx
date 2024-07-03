import { Metadata } from 'next';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ArrowBigLeftDash } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Izi Achat | Settings',
	description: 'Manage your account settings and set e-mail preferences.',
};

export default function SettingsLayout({ children }: PropsWithChildren) {
	return (
		<>
			<div className='py-3 mx-2 lg:mx-5 space-y-4'>
				<div>
					<h2 className='text-2xl font-bold'>Settings</h2>
					<p className='text-muted-foreground text-xs md:text-sm font-medium'>
						Manage your account settings and set theme preferences.
					</p>
				</div>
				<Link href='/' className={cn(buttonVariants(), 'text-xs')}>
					<ArrowBigLeftDash strokeWidth={1} />
					Back to Store
				</Link>
				<Separator />

				{/* content */}
				<div className='flex-1'>{children}</div>
			</div>
		</>
	);
}
