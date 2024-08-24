import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { HomeForm } from '@/widgets/HomeForm'
import { HomeInfo } from '@/widgets/HomeInfo'
import { HomeReview } from '@/widgets/HomeReview'
import { HomeRooms } from '@/widgets/HomeRooms'
import { FC } from 'react'
import cls from './index.module.scss'
// import adt from './adaptive.module.scss'

interface Props extends IClassName {}
const Home: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.home, [className])}>
			<HomeForm />
			<HomeRooms />
			<HomeInfo />
			<HomeReview />
		</div>
	)
}

export default Home
