import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
<<<<<<< HEAD
import './home.scss'


=======
import axios from 'axios'

import './home.scss'
>>>>>>> 58a2c9c679722ae3e24884f2a88f90f91e82a39a


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
<<<<<<< HEAD
        console.log('执行搜索', this.state.username)
        
    }

    toDoTest = () => {
        Taro.redirectTo({
            url: '/pages/home/test?id=1&name=张三'
        })
    }

    
=======
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

>>>>>>> 58a2c9c679722ae3e24884f2a88f90f91e82a39a
    render () {

        return(
            <View className='home'>
                <AtInput type='text'  value={this.state.username} onChange={this.handleChangeName} placeholder='输入用户名'  />
                <AtButton className='selectButton' onClick={this.select} type='primary' size='normal'>搜索</AtButton>
<<<<<<< HEAD
                <AtButton className='selectButton' onClick={this.toDoTest} type='primary' size='normal'>跳转</AtButton>
=======
                <Text>{this.state.userInfo}</Text>
>>>>>>> 58a2c9c679722ae3e24884f2a88f90f91e82a39a
            </View>
        )
    }
}



export default Home
