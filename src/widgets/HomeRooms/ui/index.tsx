import { getRooms } from '@/shared/api'
import { cn } from '@/shared/lib'
import { FC } from 'react'
import { IClassName, IRoomsCardAllData } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import Content from './Content'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = async ({ className }) => {
	let data: IRoomsCardAllData[] | []

	try {
		data = (await getRooms()).data
	} catch {
		data = []
	}

	return (
		<Container
			containerClass={cn(cls.container, [adt.homeRoomsContainer])}
			innerClass={cn(cls.rooms, [className, adt.homeRooms])}
		>
			<Typography weight='SB' className={cn(cls.title, [adt.title])}>
				НАШИ НОМЕРА
			</Typography>
			<Content roomsData={data} />
		</Container>
	)
}

export { HomeRooms }
