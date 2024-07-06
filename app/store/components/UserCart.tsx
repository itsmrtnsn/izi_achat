import { ShoppingBag } from 'lucide-react';

const UserCart = () => {
	return (
		<div className='relative'>
			<ShoppingBag
				strokeWidth={1}
				size={30}
				className='cursor-pointer text-main'
			/>
			<p className='absolute text-xs -top-1 -right-1 w-4 h-4  p-2 flex items-center justify-center border rounded-full bg-primary text-white font-light'>
				<span className='text-'>5</span>
			</p>
		</div>
	);
};
export default UserCart;
