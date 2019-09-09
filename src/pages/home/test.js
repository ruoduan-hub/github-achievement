import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './test.scss'

class Test extends Component {
    constructor() {
        super(...arguments);
        this.state = { 
            testText: 'prop传参：',
         };
    }
    render() {
        return (
            <View className='test' >
                <Text>{this.state.testText}</Text>
                <Text>name:{this.$router.params.name}</Text>
                <Text>id：{this.$router.params.id}</Text>
            </View>
        );
    }

    componentWillMount () {
        console.log(this.$router.params)
        console.log(process.env.TARO_ENV)
      }
}

export default Test;