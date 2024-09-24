import { FC } from 'react'
import { Container, Typography } from '@/shared/ui'
import { Timer } from './Timer'
import { NotFoundPath } from './NotFoundPath'
import cls from './index.module.scss'

interface Props {}
const NotFound: FC<Props> = () => {
	const publicPath: string = process.env.PUBLIC_PATH || ''
	return (
		<Container containerClass={cls.container} innerClass={cls.notFound}>
			<Typography weight='SB' tag='h2' className={cls.title}>
				Ошибка <span>404</span>
			</Typography>
			<NotFoundPath publicPath={publicPath} />
			<Timer />
		</Container>
	)
}

export { NotFound }
