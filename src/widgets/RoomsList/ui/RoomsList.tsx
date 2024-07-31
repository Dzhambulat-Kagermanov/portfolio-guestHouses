import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { FC } from 'react'
import Card from './Card/Card'
import cls from './RoomsList.module.scss'

interface Props extends IClassName {}
const RoomsList: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.list, [className])}
		>
			<ul className={cls.group}>
				<Card />
			</ul>
		</Container>
	)
}

export { RoomsList }
