import React, { Component } from 'react'
import moment from 'moment'

import { ButtonGroup, Button, Tooltip } from 'reactstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowAltDown, faArrowAltUp } from '@fortawesome/pro-solid-svg-icons'

const makeDescription = (amount, date) =>
  `Price ${amount > 0 ? 'increased' : 'decreased'} by `+
  `$${Math.abs(amount).toLocaleString()} on `+ 
  `${moment(date, moment.ISO_8601).format('MMMM Do, YYYY')} ` +
  `(${moment(date, moment.ISO_8601).fromNow()})`

const ChangeIcon = props =>
  <Icon icon={props.icon} style={props.size === 'xs' ? { fontSize: '.8em' } : {}} />

export default class PriceButton extends Component {
  constructor () {
    super()
    this.state = {
      tooltipOpen: false
    }
  }

  priceChangeOnHover = (tooltipOpen) => {
    this.setState({ tooltipOpen })
  }

  render () {
    const priceChangeOnClick =
      this.props.priceChangeOnClick ? this.props.priceChangeOnClick : this.props.onClick ? this.props.onClick : () => {}
    const onClick =
      this.props.onClick ? this.props.onClick : () => {}
    return (<React.Fragment>
      <ButtonGroup size={this.props.size || 'sm'}>
        {(this.props.priceChange && this.props.priceChangeAmount < 0) &&
          <Button
            id={`PriceChange_${this.props.mlsID}`}
            color='success'
            onClick={priceChangeOnClick}
            onMouseEnter={() => this.priceChangeOnHover(true)}
            onMouseLeave={() => this.priceChangeOnHover(false)}>
            <ChangeIcon icon={faArrowAltDown} size={this.props.size} />
          </Button>}
        {(this.props.priceChange && this.props.priceChangeAmount > 0) &&
          <Button
            id={`PriceChange_${this.props.mlsID}`}
            color='danger'
            onClick={priceChangeOnClick}
            onMouseEnter={() => this.priceChangeOnHover(true)}
            onMouseLeave={() => this.priceChangeOnHover(false)}>
            <ChangeIcon icon={faArrowAltUp} size={this.props.size} />
          </Button>}
        <Button color='primary' onClick={onClick}>
        ${this.props.price.toLocaleString()}</Button>
      </ButtonGroup>
      {this.props.priceChange && <Tooltip placement='bottom-start' isOpen={this.state.tooltipOpen} target={`PriceChange_${this.props.mlsID}`}>
        {makeDescription(this.props.priceChangeAmount, this.props.priceChangeDate)}
      </Tooltip>}
    </React.Fragment>)
  }
}
