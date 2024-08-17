import axios from 'axios'
import { IAboutGalleriesData } from '../../types/aboutGalleries'
import { aboutGalleriesBreakpointUrl } from '../urls/urls'

export const getAboutGalleries = () =>
	axios.get<IAboutGalleriesData[]>(aboutGalleriesBreakpointUrl)
