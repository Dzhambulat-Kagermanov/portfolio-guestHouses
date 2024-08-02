import { AboutPage } from '@/page/About'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Guest House | О нас',
}
const About: FC = ({}) => {
	return <AboutPage />
}

export default About
