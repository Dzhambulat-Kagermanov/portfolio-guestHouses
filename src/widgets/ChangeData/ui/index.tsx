'use client'
import { useHomeFormData, useModal, useWindow } from '@/shared/hooks'
import { Calendar, CalendarIn, CalendarOut, User } from '@/shared/icons'
import { cn, endingsFormatter } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Typography } from '@/shared/ui'
import { FC, useEffect } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {
	changeButtonClass?: string
	containerClass?: string
	itemsClass?: string
	groupClass?: string
}
const ChangeData: FC<Props> = ({
	className,
	changeButtonClass,
	containerClass,
	groupClass,
	itemsClass,
}) => {
	const nightsQnt = useHomeFormData(state => state.getNightsQnt)()
	const setRoomsDataChangeModalState = useModal(state => state.toggleModalState)
	const { isSmSmall } = useWindow()
	const guests = useHomeFormData(state => state.guests)
	const dateIn = useHomeFormData(state => state.dateIn)
	const dateOut = useHomeFormData(state => state.dateOut)

	const { isSmMedium } = useWindow()
	const svgSizes = isSmMedium ? 25 : 20

	useEffect(() => {
		useHomeFormData.persist.rehydrate()
	}, [])

	return (
		<Container
			containerClass={cn(cls.container, [containerClass])}
			innerClass={cn(cls.changeData, [className])}
		>
			<ul className={cn(cls.group, [groupClass])}>
				<li className={cn(cls.item, [itemsClass])}>
					<Calendar color='white' width={svgSizes} height={svgSizes} />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{nightsQnt}
						{isSmSmall &&
							endingsFormatter({
								itemQuantity: nightsQnt,
								singularEnding: '-ни сутки',
								pluralEnding: ' суток',
								singPluralEnding: '-ое суток',
							})}
					</Typography>
				</li>
				<li className={cn(cls.item, [itemsClass])}>
					<User color='white' width={svgSizes} height={svgSizes} />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{guests}{' '}
						{isSmSmall &&
							endingsFormatter({
								itemQuantity: guests,
								singularEnding: 'гость',
								singPluralEnding: '-ое гостей',
								pluralEnding: ' гостей',
							})}
					</Typography>
				</li>
				<li className={cn(cls.item, [itemsClass])}>
					<CalendarIn color='white' width={svgSizes} height={svgSizes} />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{dateIn}
					</Typography>
				</li>
				<li className={cn(cls.item, [itemsClass])}>
					<CalendarOut color='white' width={svgSizes} height={svgSizes} />
					<Typography weight='SB' className={cn(cls.itemText)}>
						{dateOut}
					</Typography>
				</li>
			</ul>
			<Button
				theme='outlined'
				className={cn(cls.button, [changeButtonClass])}
				onClick={() => {
					setRoomsDataChangeModalState('rooms-changeData')
				}}
			>
				<Typography weight='SB'>Изменить даты и гостей</Typography>
			</Button>
		</Container>
	)
}

export { ChangeData }
