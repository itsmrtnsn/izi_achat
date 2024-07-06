import ImageAspectRatio from '@/app/store/components/ImageAspectRatio';

interface Props {
	imgUrl: string;
	className?: string;
	category: string;
}

const CategoryCard = ({ imgUrl, className, category }: Props) => {
	return (
		<div>
			<ImageAspectRatio
				// width_in_px={150}
				// height_in_px={150}
				aspect_ratio={[3, 2]}
				image_url={imgUrl}
				image_alt={category}
				className='rounded'
			/>
			<p className='text-xs text-center text-muted-foreground mt-1 line-clamp-1'>
				{category}
			</p>
		</div>
	);
};
export default CategoryCard;
