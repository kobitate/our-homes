import { matchArray } from 'searchjs'
import { getHomes, getCities } from '../../utils/API'

/**
 * Generate filters for the frontend based on homes and cities lists
 * @param {Array} homes list of the homes we'll be filtering
 * @param {Object} cities List of cities and their associated ZIP Codes
 */
const generate = (homes, cities) => {
  let bedOptions = []
  let bathOptions = []
  let halfBathOptions = []
  let citiesOptions = []
  const availableFilters = []

  homes.forEach(home => {
    if (!bedOptions.includes(home.propertyDetails.beds)) {
      bedOptions.push(home.propertyDetails.beds)
    }
    if (!bathOptions.includes(home.propertyDetails.fullBaths)) {
      bathOptions.push(home.propertyDetails.fullBaths)
    }
    if (!halfBathOptions.includes(home.propertyDetails.halfBaths)) {
      halfBathOptions.push(home.propertyDetails.halfBaths)
    }
  })

  bedOptions = {
    id: 'beds',
    name: 'Bedrooms',
    multiSelect: false,
    options: bedOptions.sort().map(opt => ({
      value: opt,
      label: `${opt}+ Bed${opt === 1 ? '' : 's'}`,
      query: { 'propertyDetails.beds': { from: opt } }
    }))
  }

  bathOptions = {
    id: 'fullBaths',
    name: 'Bathrooms',
    multiSelect: false,
    options: bathOptions.sort().map(opt => ({
      value: opt,
      label: `${opt}+ Bath${opt === 1 ? '' : 's'}`,
      query: { 'propertyDetails.fullBaths': { from: opt } }
    }))
  }

  halfBathOptions = {
    id: 'halfBaths',
    name: 'Half-Bathrooms',
    multiSelect: false,
    options: halfBathOptions.sort().map(opt => ({
      value: opt,
      label: `${opt}+ Half Bath${opt === 1 ? '' : 's'}`,
      query: { 'propertyDetails.halfBaths': { from: opt } }
    }))
  }

  citiesOptions = {
    id: 'cities',
    name: 'Neighborhoods/Cities',
    multiSelect: true,
    options: Object.entries(cities).map(([city, zipCodes]) => ({
      value: city,
      label: city,
      query: { _join: 'OR', terms: zipCodes.map(zipCode => ({ zipCode })) }
    }))
  }

  console.log({ citiesOptions })
  availableFilters.push(citiesOptions, bedOptions, bathOptions, halfBathOptions)
  return availableFilters
}

const get = () => {
  return Promise.all([getHomes(), getCities()]).then(([homesRes, citiesRes]) => {
    const homes = homesRes.data
    const cities = citiesRes.data
    const availableFilters = generate(homes, cities) || []
    return [homes, availableFilters]
  })
}

const filter = (homes, activeFilters) => {
  const allQueries = []
  Object.entries(activeFilters).forEach(([filterType, filters]) => {
    if (filters[0].length !== 0 && filters.length > 0) {
      allQueries.push({ _join: 'OR', terms: filters.map(filter => filter.query) })
    }
  })
  if (allQueries.length > 0) {
    const searchQuery = {
      _join: 'AND',
      terms: allQueries
    }
    homes = matchArray(homes, searchQuery)
  }
  return homes
}

const onFilterChange = (field, details, parent) => {
  const { activeFilters } = parent.state
  if (!details) {
    delete activeFilters[field]
  } else {
    activeFilters[field] = details.length ? details : [details]
  }
  parent.setState({ activeFilters })
}

export default {
  get,
  filter,
  onFilterChange
}
