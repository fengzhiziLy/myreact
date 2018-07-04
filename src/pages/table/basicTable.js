import React from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class BasicTable extends React.Component {

  state = {
    dataSource2: []
  }

  params = {
    page: 1
  }

  componentDidMount () {
    const data = [
      {
        id: '0',
        username: 'feng',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克',
        time: '09:00'
      },
      {
        id: '1',
        username: 'fengzi',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克',
        time: '09:00'
      },
      {
        id: '2',
        username: 'fengzhizi',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克',
        time: '09:00'
      }
    ]

    data.map((item, index) => {
      item.key = index
    })
    
    this.setState({
      dataSource: data
    })

    this.request()
  }

  // 动态获取mock数据
  request = () => {
    let _this = this
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        res.result.list.map((item,index) => {
          item.key = index
        })
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current
            this.request()
          })
        })
      }
    })
  }

  onRowClick = (record, index) => {
    let selectKey = [index]
    Modal.info({
      title: '信息',
      content: `用户名：${record.username}，用户爱好: ${record.interest}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  handleDelete = () => {
    let rows = this.state.selectedRows
    let ids = []
    rows.map((item) => {
      ids.push(item.ids)
    })
    Modal.confirm({
      title: '删除提示',
      content: `确定要删除这些数据吗? ${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功')
        this.request()
      }
    })
  }

  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          let config = {
            '1': '咸鱼一条',
            '2': '江左霉郎',
            '3': '风华浪子',
            '4': '风之子',
            '5': '前端'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render (abc) {
          let config = {
            '1': '游泳',
            '2': '读书',
            '3': '踢足球',
            '4': '爬山',
            '5': '骑行',
            '6': '桌球',
            '7': '跑步',
            '8': '麦霸'
          }
          return config[abc]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]
    const { selectedRowKeys } = this.state
    // const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys,selectedRows) => {
        // let ids = []
        // selectedRows.map((item) => {
        //   ids.push(item.id)
        // })
        this.setState({
          selectedRowKeys,
          // selectedIds: ids,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{margin:'10px 0'}}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-多选" style={{margin:'10px 0'}}>
          <div style={{marginBottom: 10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-分页" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}