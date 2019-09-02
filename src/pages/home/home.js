import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import './home.scss'




class Home extends Component {
    config = {
        navigationBarTitleText: '首页'
      }
      constructor () {
          super(...arguments)
          this.state = {
            username: ''
          }
      }

    handleChangeName = (e) => {
        this.setState({username: e})
    }

    select = () => {
        console.log('执行搜索', this.state.username)
        
    }

    toDoTest = () => {
        Taro.redirectTo({
            url: '/pages/home/test?id=1&name=张三'
        })
    }

    
    render () {

        return(
            <View className='home'>
                <AtInput type='text'  value={this.state.username} onChange={this.handleChangeName} placeholder='输入用户名'  />
                <AtButton className='selectButton' onClick={this.select} type='primary' size='normal'>搜索</AtButton>
                <AtButton className='selectButton' onClick={this.toDoTest} type='primary' size='normal'>跳转</AtButton>
            </View>
        )
    }
}



export default Home