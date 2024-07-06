import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
	image_url: string;
	image_alt: string;
	className?: string;
}

const ProductImage = ({ image_url, image_alt, className }: Props) => {
	return (
		<AspectRatio ratio={4 / 3}>
			<Image
				src={image_url}
				alt={image_alt}
				className={cn('object-cover', className)}
				fill
			/>
		</AspectRatio>
	);
};
export default ProductImage;
