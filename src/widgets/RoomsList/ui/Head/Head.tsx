import { User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { endingsFormatter } from '@/shared/lib/endingsFormatter/endingsFormatter'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './Head.module.scss'

interface Props {
	availableRooms: number
	availableRoomsClass?: string
	maxGuestsInRoom: number
	maxGuestsInRoomClass?: string
}
const Head: FC<Props> = ({
	availableRooms,
	maxGuestsInRoom,
	availableRoomsClass,
	maxGuestsInRoomClass,
}) => {
	return (
		<>
			<div className={cn(cls.availableRooms, [availableRoomsClass])}>
				<Typography tag='h2' weight='R' className={cn(cls.availableRoomsText)}>
					В наличии {availableRooms}{' '}
					{endingsFormatter({
						itemQuantity: availableRooms,
						singularEnding: 'номер',
						singPluralEnding: 'номера',
						pluralEnding: 'номеров',
					})}
				</Typography>
			</div>
			<div className={cn(cls.maxGuestsInRoom, [maxGuestsInRoomClass])}>
				<Typography
					tag='h3'
					weight='B'
					className={cn(cls.maxGuestsInRoomNumber)}
				>
					{maxGuestsInRoom}
				</Typography>
				<User color='white' width={16} height={16} />
			</div>
		</>
	)
}

export default Head
