import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import Select from 'react-select'

const HomesFilter = props => {
  return (<Row>
    <Col>
      <Card>
        <CardBody className='pl-2 pt-2 pb-0 pr-0'>
          <Row noGutters>
            {props.availableFilters.map(filter => <Col xs={6} md={3} lg={2}>
              <Select
                className='mr-2 mb-2'
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
