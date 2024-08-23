'use client'
import { RoomsDataChangeModalForm } from '@/entities/RoomsDataChangeModalForm'
import { UseBodyClassName, useModal } from '@/shared/hooks'
import { Close } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Button, Container, Typography } from '@/shared/ui'
import { FC, useEffect } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const RoomsDataChangeModal: FC<Props> = ({ className }) => {
	useModal(state => state.registerModalState)('rooms-changeData')
	const modalState = useModal(state => state.modals['rooms-changeData'])
	const setRoomsChangeDataModalState = useModal(state => state.toggleModalState)
	const { addClass, removeClass } = new UseBodyClassName('body__scrollbar_hide')

	useEffect(() => {
		if (modalState) addClass()
		else removeClass()
	}, [modalState])

	return (
		<Container
			innerClass={cn(cls.modal, [className])}
			containerClass={cn(cls.container, [], { [cls.active]: modalState })}
		>
			<Button
				theme='clear'
				circle
				onClick={() => {
					setRoomsChangeDataModalState('rooms-changeData')
				}}
				className={cn(cls.closeBtn)}
			>
				<Close color='white' />
			</Button>
			<Typography tag='h2' weight='B' className={cn(cls.title)}>
				Изменить дату и кол-во гостей
			</Typography>
			<RoomsDataChangeModalForm />
		</Container>
	)
}

export { RoomsDataChangeModal }
