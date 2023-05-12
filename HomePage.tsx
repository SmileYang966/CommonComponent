/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View ,FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ToDos,ToListItem } from './src/ToDoList';

const totalData : ToListItem[] = [
  { id : 1, text : 'Dialog组件1' },
  { id : 2, text : 'Dialog组件2' },
  { id : 3, text : 'Dialog组件3' },
  { id : 4, text : 'Dialog组件4' }
]


export default class HomePage extends Component {

  constructor(props:any){
    super(props);
  }

  renderItem = ({item,index})=>{
    const { text } = item;
    return (
      <TouchableOpacity style={{height:60,justifyContent:'center',paddingHorizontal:10,borderBottomWidth:0.3}} onPress={()=>this.itemClick(index)}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }

  itemClick = (index : number) => {
    const { navigation } = this.props;
    switch (index) {
      case 0:
        navigation.push("DialogScreen")
        break;
      case 1:
        navigation.push("MultiDialogScreen")
        break;
      default:
        navigation.push("MultiDialogScreen")
        break;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          style={{flex:1}}
          data={totalData}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
