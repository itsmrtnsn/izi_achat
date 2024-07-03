import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Props {
	imgUrl: string;
	className?: string;
}

const UserAvatar = ({ imgUrl, className }: Props) => {
	return (
		<Avatar className={cn('w-9 h-9 border cursor-pointer', className)}>
			<AvatarImage src={imgUrl} />
			<AvatarFallback>?</AvatarFallback>
		</Avatar>
	);
};
export default UserAvatar;
