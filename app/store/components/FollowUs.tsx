import { link } from 'fs';
import Image from 'next/image';

const FollowUs = () => {
	const socials: { id: number; name: string; imgUrl: string; link: string }[] =
		[
			{
				id: 1,
				name: 'Instagram',
				imgUrl: './assets/instagram.svg',
				link: 'instagram.com/iziachat',
			},
			{
				id: 2,
				name: 'X',
				imgUrl: './assets/x.svg',
				link: 'x.com/iziachat',
			},

			{
				id: 3,
				name: 'Facebook',
				imgUrl: './assets/facebook.svg',
				link: 'facebook.com/profile.php?id=61560984165580',
			},

			{ id: 4, name: 'Whatsapp', imgUrl: './assets/whatsapp.svg', link: '/' },
		];
	return (
		<div className='flex gap-3'>
			{socials.map((social) => (
				<a key={social.id} href={`https://${link}`} target='_blank'>
					<Image src={social.imgUrl} width={35} height={35} alt={social.name} />
				</a>
			))}
		</div>
	);
};
export default FollowUs;
