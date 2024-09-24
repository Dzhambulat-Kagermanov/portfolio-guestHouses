import { getRooms } from '@/shared/api'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'
import adt from 'page/Home/ui/adaptive.module.scss'
import Content from './Content'

interface Props extends IClassName {}
const HomeRooms: FC<Props> = async ({ className }) => {
	const roomsData = await getRooms()

	return (
		<Container
			containerClass={cn(cls.container, [adt.homeRoomsContainer])}
			innerClass={cn(cls.rooms, [className, adt.homeRooms])}
		>
			<Typography weight='SB' className={cn(cls.title, [adt.title])}>
				НАШИ НОМЕРА
			</Typography>
			<Content roomsData={roomsData.data} />
		</Container>
	)
}

export { HomeRooms }
