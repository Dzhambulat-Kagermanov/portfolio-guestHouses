import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { PageLogoTitle } from '@/widgets/PageLogoTitle'
import { FC } from 'react'
import cls from './index.module.scss'

interface Props extends IClassName {}
const BookingLogoTitle: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<PageLogoTitle
				titleClass={cn(cls.pageLogoTitle)}
				title={
					<>
						Valentina
						<br />
						Guest House
					</>
				}
			/>
		</Container>
	)
}

export { BookingLogoTitle }
