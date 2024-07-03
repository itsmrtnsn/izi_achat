import AppearanceForm from './AppearanceForm';

export default function SettingsAppearancePage() {
	return (
		<div className='space-y-6'>
			<div>
				<p className='text-sm text-muted-foreground text-center'>
					Automatically switch between Light and Dark themes.
				</p>
			</div>

			<AppearanceForm />
		</div>
	);
}
