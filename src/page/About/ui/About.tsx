import { cn } from '@/shared/lib'
import { IClassName } from '@/shared/types/shared'
import { FC } from 'react'
import cls from './About.module.scss'

interface Props extends IClassName {}
const About: FC<Props> = ({ className }) => {
	return <div className={cn(cls.about, [className])}>About</div>
}

export default About
