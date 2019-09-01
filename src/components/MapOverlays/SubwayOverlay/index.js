import React, { PureComponent } from 'react'
import { CanvasOverlay } from 'react-map-gl'
import MBTAColors from '../../../utils/MBTAColors'

export default class SubwayOverlay extends PureComponent {
  _redraw ({ width, height, ctx, isDragging, project, unproject }) {
    const { points, color = MBTAColors[this.props.line], lineWidth = 3, renderWhileDragging = true } = this.props
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'lighter'

    if ((renderWhileDragging || !isDragging) && points) {
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color
      ctx.beginPath()
      points.forEach(point => {
        const pixel = project([point[1], point[0]])
        ctx.lineTo(pixel[0], pixel[1])
      })
      ctx.stroke()
    }
  }

  render () {
    return <CanvasOverlay redraw={this._redraw.bind(this)} />
  }
}
