import { User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName, IRoomsCardData } from '@/shared/types'
import { Typography } from '@/shared/ui'
import Image from 'next/image'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props
	extends IClassName,
		Omit<
			IRoomsCardData,
			| 'conditions'
			| 'services'
			| 'title'
			| 'description'
			| 'roomImages'
			| 'previewDescription'
		> {}
const Head: FC<Props> = ({
	className,
	availableRooms,
	maxGuests,
	previewImg,
}) => {
	return (
		<div className={cn(cls.head, [className])}>
			<Image
				src={previewImg}
				alt='Предварительное фото комнаты'
				width={300}
				height={184}
			/>
			<div className={cn(cls.guests)}>
				<Typography weight='B'>{maxGuests}</Typography>
				<User color='white' />
			</div>
			<div className={cn(cls.availableRooms)}>
				<Typography weight='R'>В наличии {availableRooms} номеров</Typography>
			</div>
		</div>
	)
}

export default Head
