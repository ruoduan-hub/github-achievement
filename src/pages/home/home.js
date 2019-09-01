import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import axios from 'axios'

import './home.scss'


class Home extends Component {
    config = {
        navigationBarTitleText: '首页'
      }
      constructor () {
          super(...arguments)
          this.state = {
            username: '',
            userInfo: '默认的'
          }
      }

    handleChangeName = (e) => {
        this.setState({username: e})
    }

    select = () => {
        // console.log(this.state.username)
        Taro.request({
          url: 'https://profile-summary-for-github.com/api/user/chad97',
          header: {
            'content-type': 'appliction/json'
          },
          success(res) {
            let info = res.data.langCommitCount.HTML
            this.setState({userInfo: info})

          }
        })
    }

    render () {

        return(
            <View className='home'>
                <AtInput type='text'  value={this.state.username} onChange={this.handleChangeName} placeholder='输入用户名'  />
                <AtButton className='selectButton' onClick={this.select} type='primary' size='normal'>搜索</AtButton>
                <Text>{this.state.userInfo}</Text>
            </View>
        )
    }
}



export default Home
