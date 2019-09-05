import React from 'react'
import { Helmet } from 'react-helmet'

const DetailMetaTags = props => {
  return (<Helmet>
    {props.address && <title>Our Homes | {props.address}</title>}
    {props.fullType && <meta name='description' content={`${props.fullType} Home in ${props.neighborhood || props.zipCode} listed for $${props.price ? props.price.toLocaleString() : 'an unknown amount'}`} />}
    {props.mlsID && <meta property='og:image' content={`https://media.mlspin.com/photo.aspx?nopadding=1&mls=${props.mlsID}&n=0`} />}
  </Helmet>)
}

export default DetailMetaTags
