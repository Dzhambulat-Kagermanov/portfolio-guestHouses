import { FC } from 'react'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'
import { Spinner } from '@/shared/ui'

interface Props {}
const Loader: FC<Props> = () => {
	return (
		<div className={cn(cls.emptyContainer)}>
			<div className={cn(cls.overlayContainer)}>
				<Spinner />
			</div>
		</div>
	)
}

export { Loader }
