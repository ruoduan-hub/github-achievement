import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'



class Test extends Component {
    constructor() {
        super(...arguments);
        this.state = { 
            testText: '123123',
         };
    }
    render() {
        return (
            <View>
                <Text>{this.state.testText}</Text>
            </View>
        );
    }

    componentWillMount () {
        console.log(this.$router.params)
        console.log(process.env.TARO_ENV)
      }
}

export default Test;