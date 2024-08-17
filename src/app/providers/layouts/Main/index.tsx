import { IChildren } from '@/shared/types'
import { BurgerMenu } from '@/widgets/BurgerMenu'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { FC } from 'react'
const MainLayout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<BurgerMenu />
			{children}
			<Footer />
		</>
	)
}

export { MainLayout }
