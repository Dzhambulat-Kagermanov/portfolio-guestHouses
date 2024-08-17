import { MainLayout } from '@/app/providers/layouts'
import '@/app/styles/index.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Guest House | Главная',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
