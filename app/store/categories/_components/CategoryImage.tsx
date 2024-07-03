import ImageAspectRatio from '../../components/ImageAspectRatio';

interface Props {
	imgUrl: string;
	imageAlt: string;
	className?: string;
}

const CategoryImage = ({ imageAlt, imgUrl }: Props) => {
	return (
		<ImageAspectRatio
			width_in_px={50}
			height_in_px={50}
			aspect_ratio={[5, 5]}
			image_url={imgUrl}
			image_alt={imageAlt}
			className='rounded-full'
		/>
	);
};
export default CategoryImage;
