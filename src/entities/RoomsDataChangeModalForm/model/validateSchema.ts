import {
	validateDateInValidation,
	validateDateOutValidation,
	validateGuestsValidation,
} from '@/shared/utils'
import * as yup from 'yup'

export const validateSchema = yup.object().shape({
	'rooms-dateIn': validateDateInValidation('rooms-dateOut'),
	'rooms-dateOut': validateDateOutValidation('rooms-dateIn'),
	'rooms-guests': validateGuestsValidation,
})
