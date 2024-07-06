import { IoStar, IoStarHalfSharp, IoStarOutline } from 'react-icons/io5';

interface ReviewIconProps {
	averageReview: number;
	size?: number;
}

const ReviewIcon = ({ averageReview, size }: ReviewIconProps) => {
	const iconSIze = size || 16;
	return (
		<div className='flex space-x-2 font-light text-primary cursor-pointer'>
			{[...Array(5)].map((star, index) => {
				const ratingValue = index + 1;
				return (
					<span key={index}>
						{ratingValue <= averageReview ? (
							<IoStar size={iconSIze} />
						) : ratingValue <= averageReview + 0.5 ? (
							<IoStarHalfSharp size={iconSIze} />
						) : (
							<IoStarOutline size={iconSIze} />
						)}
					</span>
				);
			})}
		</div>
	);
};

export default ReviewIcon;
