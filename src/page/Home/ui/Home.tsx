import { cn } from '@/shared/lib/cn/cn'
import { IClassName } from '@/shared/types/shared'
import { HomeForm } from '@/widgets/HomeForm'
import { HomeInfo } from '@/widgets/HomeInfo'
import { HomeReview } from '@/widgets/HomeReview'
import { HomeRooms } from '@/widgets/HomeRooms'
import { FC } from 'react'
import cls from './Home.module.scss'

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
