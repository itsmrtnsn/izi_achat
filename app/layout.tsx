import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

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
				className={cn(inter.className, 'antialiased h-screen bg-background')}
			>
				{children}
			</body>
		</html>
	);
}
