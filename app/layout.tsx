import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers/ThemeProvider';

import { GeistSans } from 'geist/font/sans';
export const metadata: Metadata = {
	title: 'Izi Achat',
	description: 'Izi Achat, the best place to buy stuff online',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					GeistSans.className,
					'antialiased h-screen bg-background'
				)}
			>
				<ThemeProvider attribute='class' defaultTheme='system'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
