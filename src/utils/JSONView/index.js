import React from 'react'

import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/dist/monikai'

const JSONView = props => <JSONPretty data={props.data} theme={JSONPrettyMon} />

export default JSONView
