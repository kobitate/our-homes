import React, { PureComponent } from 'react'
import { CanvasOverlay } from 'react-map-gl'

export default class SubwayOverlay extends PureComponent {
  _redraw ({ width, height, ctx, isDragging, project, unproject }) {
    const colors = {
      Blue: '#003da5',
      Bus: '#ffc72c',
      Commuter: '#80276c',
      Ferry: '#008eaa',
      Green: '#00843d',
      Orange: '#ed8b00',
      Red: '#da291c',
      Silver: '#7c878e'
    }

    const { points, color = colors[this.props.line], lineWidth = 3, renderWhileDragging = true } = this.props
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
