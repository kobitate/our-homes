import React from 'react'
import styled from 'styled-components'

const SubwayStation = props => {
  const SubwayIcon = styled.div`
    background-color: ${props.color};
    width: 20px;
    height: 20px;
    border-radius: 20px;
  `
  return (<SubwayIcon />)
}

export default SubwayStation
