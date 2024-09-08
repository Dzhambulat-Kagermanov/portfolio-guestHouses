import { IChildren } from '@/shared/types'
import { BurgerMenu } from '@/widgets/BurgerMenu'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { FC } from 'react'
import adt from './adaptive.module.scss'
import { cn } from '@/shared/lib'

const MainLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<Header
				containerClass={adt.headerContainer}
				className={adt.header}
				contentClass={adt.content}
				infoClass={adt.info}
				infoContentClass={adt.content}
				infoItemClass={adt.item}
				logoClass={adt.logo}
				menuBtnClass={adt.menu}
				navClass={adt.nav}
				navLinkClass={adt.link}
				navActiveLinkClass={adt.active}
			/>
			<BurgerMenu />
			{children}
			<Footer
				infoGroupClassName={cn(adt.group)}
				className={cn(adt.footer)}
				wrapperClassName={cn(adt.footerWrapper)}
				infoClassName={cn(adt.info)}
				containerClassName={cn(adt.footerTopContainer)}
			/>
		</>
	)
}

export { MainLayout }
