import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('testing Button ui component', () => {
	const testText = 'TEST'

	test('test text', () => {
		render(<Button>{testText}</Button>)
		const button = screen.getByRole('button', { name: testText })
		expect(button).toBeInTheDocument()
	})
})
