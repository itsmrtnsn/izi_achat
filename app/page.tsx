import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HomePage = () => {
	return (
		<div className='m-4 space-y-5'>
			<p className='border p-1 text-ring  bg-card'>
				this is a test to see if the geist font is applied
			</p>

			<Input placeholder='input' className='transition-all' />
		</div>
	);
};
export default HomePage;
