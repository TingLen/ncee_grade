import React, { Component } from 'react'
import styled from 'styled-components'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'

import option from './chartOption'

const Wrapper = styled.div`
  height: 40%;
  width: 100%;
`

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  initEchart = () => {
    const myChart = echarts.init(document.getElementById('myChart'))
    myChart.setOption(option)
  }

  componentDidMount() {
    this.initEchart()
  }

  render() {
    return <Wrapper id="myChart" />
  }
}

export default LineChart
