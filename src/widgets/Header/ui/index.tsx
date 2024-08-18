'use client'
import { type TModalState, useModal } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container, Logo, MenuButton } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const Header: FC<Props> = ({ className }) => {
	const setBurgerMenuState: TModalState = useModal(
		state => state.toggleModalState
	)

	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cn(cls.header), [className])}
			tag='header'
		>
			<MenuButton
				className={cn(cls.button)}
				onClick={() => {
					setBurgerMenuState('modal-burgerMenu')
				}}
			/>
			<Logo className={cn(cls.logo)} link={{ href: '/' }} />
		</Container>
	)
}

export { Header }
