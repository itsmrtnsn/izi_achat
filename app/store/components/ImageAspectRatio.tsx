import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
	// width_in_px: number;
	// height_in_px: number;
	aspect_ratio: [number, number];
	image_url: string;
	image_alt: string;
	className?: string;
}

const ImageAspectRatio = ({
	aspect_ratio,
	image_url,
	image_alt,
	className,
}: Props) => {
	return (
		<AspectRatio ratio={aspect_ratio[0] / aspect_ratio[1]}>
			<Image
				src={image_url}
				alt={image_alt}
				className={cn('object-cover', className)}
				fill
			/>
		</AspectRatio>
	);
};
export default ImageAspectRatio;
