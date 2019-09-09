import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput, AtDrawer, AtIcon  } from 'taro-ui'
import './home.scss'






class Home extends Component {
    config = {
        navigationBarTitleText: '首页'
      }
      constructor () {
          super(...arguments)
          this.state = {
            username: '',
            show: false,
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
            url: '/pages/home/test?id=123&name=张三'
        })
    }

    //  drawer 关闭结束回调函数
    onClose = () => {
        this.setState({
            show: !this.state.show
        })
    }
    

    render () {

        return(
            <View  className='home'>
                <AtInput type='text'  value={this.state.username} onChange={this.handleChangeName} placeholder='输入用户名'  />
                <AtButton className='selectButton' onClick={this.select} type='primary' size='normal'>搜索</AtButton>
                <AtButton className='selectButton' onClick={this.toDoTest} type='primary' size='normal'>跳转</AtButton>
                <AtButton className='selectButton' onClick={this.onClose} type='primary' size='normal'>打开抽屉</AtButton>
                <AtDrawer show={this.state.show} onClose={this.onClose} mask items={['菜单1', '菜单2']} ></AtDrawer>
            </View>
                
        )
    }
}



export default Home
