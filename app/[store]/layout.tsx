import { PropsWithChildren } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const layout = ({ children }: PropsWithChildren) => {
	return (
		<section>
			<div className='px-3'>
				<NavBar />
			</div>
			<div className='px-3 mt-10'>{children}</div>
			<div>
				<div className='mt-10'>
					<Footer />
				</div>
			</div>
		</section>
	);
};
export default layout;
