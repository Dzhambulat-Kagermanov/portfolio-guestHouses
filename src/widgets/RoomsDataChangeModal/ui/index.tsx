'use client'
import { RoomsDataChangeModalForm } from '@/entities/RoomsDataChangeModalForm'
import { useModal } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const RoomsDataChangeModal: FC<Props> = ({ className }) => {
	useModal(state => state.registerModalState)('rooms-changeData')
	const modalState = useModal(state => state.modals['rooms-changeData'])

	return (
		<Container
			innerClass={cn(cls.modal, [className])}
			containerClass={cn(cls.container, [], { [cls.active]: modalState })}
		>
			<RoomsDataChangeModalForm />
		</Container>
	)
}

export { RoomsDataChangeModal }
