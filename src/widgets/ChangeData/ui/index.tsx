'use client'
import { useHomeFormData } from '@/shared/hooks'
import { Calendar, CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const ChangeData: FC<Props> = ({ className }) => {
	console.log(useHomeFormData(state => state))

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.changeData, [className])}
		>
			<ul className={cn(cls.group)}>
				<li className={cn(cls.item)}>
					<Calendar color='white' />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{useHomeFormData(state => state.getNightsQnt)()}
					</Typography>
				</li>
				<li className={cn(cls.item)}>
					<User color='white' />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{useHomeFormData(state => state.guests)}
					</Typography>
				</li>
				<li className={cn(cls.item)}>
					<CalendarIn color='white' />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{useHomeFormData(state => state.dateIn)}
					</Typography>
				</li>
				<li className={cn(cls.item)}>
					<CalendarOut color='white' />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{useHomeFormData(state => state.dateOut)}
					</Typography>
				</li>
			</ul>
			<Button theme='outlined' className={cn(cls.button)}>
				<Typography weight='SB'>Изменить даты и гостей</Typography>
			</Button>
		</Container>
	)
}

export { ChangeData }
