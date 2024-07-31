import { FC } from 'react'
import cls from './Home.module.scss'
import { IClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn/cn'
import HomeForm from './HomeForm/ui/HomeForm'
import HomeRooms from './HomeRooms/HomeRooms'
import HomeInfo from './HomeInfo/HomeInfo'
import HomeReview from './HomeReview/HomeReview'

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
