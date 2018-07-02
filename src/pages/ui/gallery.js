import React from 'react'
import { Card, Row, Col, Modal } from 'antd'
import './ui.less'

export default class Gallery extends React.Component {

  state = {
    visible: false
  }

  openGallery = (imgSrc) => {
    this.setState({
      visible: true,
      currentImg: '/gallery/' + imgSrc
    })
  }

  render () {
    const imgs = [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
      ['6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],
      ['11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'],
      ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
      ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg'],
    ]
    const imgList = imgs.map((list) => list.map((item) =>
      <Card
        style={{marginBottom: 10}}
        cover={<img src={'/gallery/' + item} alt="" onClick={() => this.openGallery(item)} />}
      >
        <Card.Meta
          title="React feng"
          description="fengzhizi"
        />
      </Card>
    ))
    return (
      <div className="card-wrap">
        <Row gutter={10}>
          <Col md={4}>
            {imgList[0]}
          </Col>
          <Col md={4}>
            {imgList[1]}
          </Col>
          <Col md={4}>
            {imgList[2]}
          </Col>
          <Col md={4}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>
        <Modal
          title="feng画廊"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}
        >
          {<img src={this.state.currentImg} alt="" style={{width: '100%'}} />}
        </Modal>
      </div>
    )
  }
}
