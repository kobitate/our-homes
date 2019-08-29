import React from 'react'

import { Table } from 'reactstrap'

import HomesTableItem from '../HomesTableItem'

const HomesTable = props => {
  return (
    <Table light>
      <thead>
        <th>&nbsp;</th>
        <th>MLS ID</th>
        <th>Address</th>
        <th>Neighborhood</th>
        <th colspan='2'>Layout</th>
        <th>Price</th>
      </thead>
      <tbody>
        {props.homes.map(home => <HomesTableItem {...home} />)}
      </tbody>
    </Table>
  )
}

export default HomesTable
