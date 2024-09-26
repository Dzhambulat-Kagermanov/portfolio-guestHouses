import { MainLayout } from '@/app/providers/layouts'
import '@/app/styles/index.scss'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: { default: 'Guest House', template: '%s | Guest House' },
}
export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='body'>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
