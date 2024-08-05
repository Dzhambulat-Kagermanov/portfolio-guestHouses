import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/Button/Button'
import { Typography } from '@/shared/ui/Typography/Typography'
import { FC } from 'react'
import cls from './RoomsCardBooking.module.scss'

interface Props {}
const RoomsCardBooking: FC<Props> = ({}) => {
	return (
		<Button className={cn(cls.button)} onClick={() => {}}>
			<Typography weight='M'>Забронировать</Typography>
		</Button>
	)
}

export { RoomsCardBooking }
