import { matchArray } from 'searchjs'

const getAvailable = homes => {
  let bedOptions = []
  let bathOptions = []
  let halfBathOptions = []
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

  availableFilters.push(bedOptions, bathOptions, halfBathOptions)
  return availableFilters
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
  getAvailable,
  filter,
  onFilterChange
}
