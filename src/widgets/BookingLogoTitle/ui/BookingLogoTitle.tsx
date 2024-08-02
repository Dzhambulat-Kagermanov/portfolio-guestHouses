import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { Container } from '@/shared/ui/Container/Container'
import { PageLogoTitle } from '@/widgets/PageLogoTitle'
import { FC } from 'react'
import cls from './BookingLogoTitle.module.scss'

interface Props extends IClassName {}
const BookingLogoTitle: FC<Props> = ({ className }) => {
	return (
		<Container
			containerClass={cn(cls.container)}
			innerClass={cn(cls.wrapper, [className])}
		>
			<PageLogoTitle
				titleClass={cn(cls.pageLogoTitle)}
				text={
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
