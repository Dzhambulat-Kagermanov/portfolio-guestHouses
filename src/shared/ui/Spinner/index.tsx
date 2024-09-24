import { FC } from 'react'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'

interface Props {}
const Spinner: FC<Props> = () => {
	return <div className={cn(cls.loader)}></div>
}

export { Spinner }
