'use client'
import { TModalState, useModal } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { ActiveLink, Container, Typography } from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BurgerMenu: FC<Props> = ({ className }) => {
	const BURGER_MENU_NAME = 'modal-burgerMenu'
	useModal(state => state.registerModalState)(BURGER_MENU_NAME)
	const burgerMenuState: boolean = useModal(
		state => state.modals[BURGER_MENU_NAME]
	)
	const toggleBurgerMenuState: TModalState = useModal(
		state => state.toggleModalState
	)

	return (
		<Container
			containerClass={cn(cls.container, [], { [cls.active]: burgerMenuState })}
			innerClass={cn(cls.menu, [className])}
		>
			<ul className={cn(cls.group)}>
				<li className={cn(cls.item)}>
					<ActiveLink
						onClick={() => {
							toggleBurgerMenuState(BURGER_MENU_NAME)
						}}
						activeClass={cn(cls.activeLink)}
						className={cn(cls.link)}
						href='/'
					>
						<Typography weight='M'>ГЛАВНАЯ</Typography>
					</ActiveLink>
				</li>
				<li className={cn(cls.item)}>
					<ActiveLink
						onClick={() => {
							toggleBurgerMenuState(BURGER_MENU_NAME)
						}}
						activeClass={cn(cls.activeLink)}
						className={cn(cls.link)}
						href='/rooms'
					>
						<Typography weight='M'>НОМЕРА И ЦЕНЫ</Typography>
					</ActiveLink>
				</li>
				<li className={cn(cls.item)}>
					<ActiveLink
						onClick={() => {
							toggleBurgerMenuState(BURGER_MENU_NAME)
						}}
						activeClass={cn(cls.activeLink)}
						className={cn(cls.link)}
						href='/articles'
					>
						<Typography weight='M'>СТАТЬИ</Typography>
					</ActiveLink>
				</li>
				<li className={cn(cls.item)}>
					<ActiveLink
						onClick={() => {
							toggleBurgerMenuState(BURGER_MENU_NAME)
						}}
						activeClass={cn(cls.activeLink)}
						className={cn(cls.link)}
						href='/about'
					>
						<Typography weight='M'>ИНФОРМАЦИЯ</Typography>
					</ActiveLink>
				</li>
			</ul>
		</Container>
	)
}

export { BurgerMenu }
