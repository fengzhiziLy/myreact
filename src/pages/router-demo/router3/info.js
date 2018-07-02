import React from 'react'

export default class Info extends React.Component {

  render () {
    return (
      <div>
        这是测试动态路由功能
        {this.props.match.params.value}
      </div>
    )
  }

}
