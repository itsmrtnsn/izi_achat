import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Account from './Account';
import Appearance from './Appearance';

const SetttingsTabs = () => {
	return (
		<Tabs defaultValue='Account' className=''>
			<TabsList>
				<TabsTrigger value='Account'>Account</TabsTrigger>
				<TabsTrigger value='Appearance'>Appearance</TabsTrigger>
			</TabsList>
			<TabsContent value='Account' className='max-w-screen-md'>
				<Account />
			</TabsContent>
			<TabsContent value='Appearance'>
				<Appearance />
			</TabsContent>
		</Tabs>
	);
};
export default SetttingsTabs;
