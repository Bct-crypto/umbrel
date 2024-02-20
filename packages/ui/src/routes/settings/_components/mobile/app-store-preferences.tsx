import {UmbrelHeadTitle} from '@/components/umbrel-head-title'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerScroller,
	DrawerTitle,
} from '@/shadcn-components/ui/drawer'
import {useDialogOpenProps} from '@/utils/dialog'
import {t} from '@/utils/i18n'

import {AppStorePreferencesContent} from '../app-store-preferences-content'

export function AppStorePreferencesDrawer() {
	const title = t('settings.app-store-preferences.title')
	const dialogProps = useDialogOpenProps('app-store-preferences')

	return (
		<Drawer {...dialogProps}>
			<DrawerContent fullHeight withScroll>
				<DrawerHeader>
					<UmbrelHeadTitle>{title}</UmbrelHeadTitle>
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{t('app-store.description')}</DrawerDescription>
				</DrawerHeader>
				<DrawerScroller>
					<div className='flex flex-col gap-5'>
						<AppStorePreferencesContent />
					</div>
				</DrawerScroller>
			</DrawerContent>
		</Drawer>
	)
}
