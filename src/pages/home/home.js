import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'


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
        console.log('执行搜索')
    }
    
    render () {

        return(
            <View className='home'>
                <AtInput type='text'  value={this.state.username} onChange={this.handleChangeName} placeholder='输入用户名'  />
                <AtButton className='selectButton' onClick={this.select} type='primary' size='normal'>搜索</AtButton>
            </View>
        )
    }
}



export default Home