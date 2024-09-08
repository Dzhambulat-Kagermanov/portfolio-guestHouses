'use client'
import { type TModalState, useModal, useWindow } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import {
	ActiveLink,
	Container,
	Logo,
	MenuButton,
	Typography,
} from '@/shared/ui'
import { FC } from 'react'
import cls from './index.module.scss'
import Info from './Info'

interface Props extends IClassName {
	menuBtnClass?: string
	logoClass?: string
	infoClass?: string
	infoContentClass?: string
	infoItemClass?: string
	contentClass?: string
	navClass?: string
	navLinkClass?: string
	containerClass?: string
	navActiveLinkClass?: string
}
const Header: FC<Props> = ({
	className,
	infoClass,
	logoClass,
	menuBtnClass,
	infoContentClass,
	infoItemClass,
	contentClass,
	containerClass,
	navActiveLinkClass,
	navClass,
	navLinkClass,
}) => {
	const setBurgerMenuState: TModalState = useModal(
		state => state.toggleModalState
	)
	const { isMdMedium } = useWindow()

	return (
		<Container
			containerClass={cn(cls.container, [containerClass])}
			innerClass={cn(cn(cls.header), [className])}
			tag='header'
		>
			{isMdMedium ? (
				<>
					<MenuButton
						className={cn(cls.button, [menuBtnClass])}
						onClick={() => {
							setBurgerMenuState('modal-burgerMenu')
						}}
					/>
					<Logo className={cn(cls.logo, [logoClass])} link={{ href: '/' }} />
				</>
			) : (
				<>
					<Info
						className={cn(cls.info, [infoClass])}
						infoContentClass={cn(cls.infoContent, [infoContentClass])}
						infoItemClass={cn(cls.infoItem, [infoItemClass])}
					/>
					<div className={cn(cls.content, [contentClass])}>
						<Logo className={cn(cls.logo, [logoClass])} link={{ href: '/' }} />
						<nav className={cn(cls.nav, [navClass])}>
							<ActiveLink
								href='/'
								activeClass={cn(cls.active, [navActiveLinkClass])}
								className={cn(cls.link, [navLinkClass])}
							>
								<Typography weight='M'>ГЛАВНАЯ</Typography>
							</ActiveLink>
							<ActiveLink
								href='/rooms'
								activeClass={cn(cls.active, [navActiveLinkClass])}
								className={cn(cls.link, [navLinkClass])}
							>
								<Typography weight='M'>НОМЕРА И ЦЕНЫ</Typography>
							</ActiveLink>
							<ActiveLink
								href='/articles'
								activeClass={cn(cls.active, [navActiveLinkClass])}
								className={cn(cls.link, [navLinkClass])}
							>
								<Typography weight='M'>СТАТЬИ</Typography>
							</ActiveLink>
							<ActiveLink
								href='/about'
								activeClass={cn(cls.active, [navActiveLinkClass])}
								className={cn(cls.link, [navLinkClass])}
							>
								<Typography weight='M'>ИНФОРМАЦИЯ</Typography>
							</ActiveLink>
						</nav>
					</div>
				</>
			)}
		</Container>
	)
}

export { Header }
