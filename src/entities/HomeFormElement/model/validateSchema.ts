import {
	validateDateInValidation,
	validateDateOutValidation,
	validateGuestsValidation,
} from '@/shared/utils'
import * as yup from 'yup'

export const validateSchema = yup.object().shape({
	'home-dateIn': validateDateInValidation('home-dateOut'),
	'home-dateOut': validateDateOutValidation('home-dateIn'),
	'home-guests': validateGuestsValidation,
})
