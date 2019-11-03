import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import Select from 'react-select'

const HomesFilter = props => {
  return (<Row>
    <Col>
      <Card>
        <CardBody className='p-2'>
          <Row noGutters>
            {props.availableFilters.map(filter => <Col xs={2}>
              <Select
                className='mr-2'
                placeholder={filter.name}
                options={filter.options}
                isMulti={filter.multiSelect}
                onChange={details => props.onChange(filter.id, details)}
                isClearable
                styles={{
                  option: styles => ({
                    ...styles,
                    color: 'black'
                  }),
                  menu: styles => ({
                    ...styles,
                    zIndex: 999
                  })
                }} /></Col>)}
          </Row>
        </CardBody>
      </Card>
    </Col>
  </Row>)
}

export default HomesFilter
