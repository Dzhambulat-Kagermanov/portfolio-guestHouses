'use client'
import { type TModalState, useModal } from '@/shared/hooks'
import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { Logo } from '@/shared/ui/Logo/Logo'
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton'
import { FC } from 'react'
import cls from './Header.module.scss'

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
			<Logo className={cn(cls.logo)} />
		</Container>
	)
}

export { Header }
