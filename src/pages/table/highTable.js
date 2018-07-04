import React from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd'
import axios from './../../axios/index'

export default class BasicTable extends React.Component {

  state = {

  }

  params = {
    page: 1
  }

  componentDidMount () {
    this.request()
  }

  request = () => {
    axios.ajax({
      url: '/table/high/list',
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
          dataSource: res.result.list
        })
      }
    })
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }

  handleDelete = (item) => {
    // let id = item.id
    Modal.confirm({
      title: "确认",
      content: "确认删除吗？",
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
        width: 80,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 80,
        dataIndex: 'username'
      },
      {
        width: 80,
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        width: 80,
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
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
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        width: 80,
        dataIndex: 'time'
      }
    ]
    const columns2 = [
      {
        title: 'id',
        width: 80,
        fixed: 'left',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 80,
        fixed: 'left',
        dataIndex: 'username'
      },
      {
        width: 80,
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 80,
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
        width: 80,
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
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        width: 120,
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 120,
        fixed: 'right',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        width: 80,
        fixed: 'right',
        dataIndex: 'time'
      }
    ]
    const columns3 = [
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
        title: '年龄',
        dataIndex: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
        sortOrder: this.state.sortOrder
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
    const columns4 = [
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
        title: '年龄',
        dataIndex: 'age'
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
            '1': <Badge status="success" text="游泳"/>,
            '2': <Badge status="error" text="读书"/>,
            '3': <Badge status="default" text="踢足球"/>,
            '4': <Badge status="processing" text="爬山"/>,
            '5': <Badge status="warning" text="骑行"/>,
            '6': <Badge status="default" text="桌球"/>,
            '7': <Badge status="success" text="跑步"/>,
            '8': <Badge status="processing" text="麦霸"/>
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
        title: '操作',
        render: (text, item) => {
          return <Button size="small" onClick={(item) => {this.handleDelete(item)}}>删除</Button>
        }
      }
    ]
    return (
      <div>
        <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>
        <Card title="左侧固定" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x: 2140}}
          />
        </Card>
        <Card title="表格排序" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{margin:'10px 0'}}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}