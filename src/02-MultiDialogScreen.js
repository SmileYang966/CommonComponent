import { Text, View, Pressable,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import { showModel,dismissModel, showMultiPopupModelAndFindNext,dismissModelAndFindNext } from './component/ModelOperations';
import warningPopUp from '../images/warning.png'


const popupDataArray = [
  { id : 0, popupTitle : '弹框1-已达到设定温度' },
  { id : 1, popupTitle : '弹框2-故障报警' },
  { id : 2, popupTitle : '弹框3-燃气热水器已到达维保日期' }
]

export default class MultiDialogScreen extends Component {
  render() {
    return (
      <View>
        <Text>案例：显示多个弹框</Text>
        <Pressable onPress={()=>{
          this.clickAndPopup();
        }} style={{backgroundColor:'gray',alignSelf:'center',justifyContent:'center',alignItems:'center',padding:10}}>
          <Text>点击弹出多个弹框</Text>
        </Pressable>
      </View>
    )
  }

  clickAndPopup(){
    ShowMultiPopupWithPopupData(0);
  }
}

function ShowMultiPopupWithPopupData(index){
  // 当前的index必须是在数组里，避免越界
  if(popupDataArray && popupDataArray.length > 0 && index < popupDataArray.length){

    // 获取需要展示的popup view，传入index即可
    const showPopup = MentionPopUp(index);

    showMultiPopupModelAndFindNext(showPopup,()=>{
      findNextPopup(index);
    })
  }
}

function findNextPopup(index){
  ShowMultiPopupWithPopupData(index+1);
}

function MentionPopUp(index){

  const popupDetail = popupDataArray[index];

  return (
    <View style={styles.popUpStyle}>
      <View style={{alignItems : 'center',height:180,justifyContent:'space-around',paddingVertical:10}}>
        <Image source={warningPopUp} style={styles.popUpImgStyle}></Image>
        <Text style={styles.popUpTitleStyle}>提示</Text>
        <Text style={styles.popUpDetailStyle}>{popupDetail.popupTitle}</Text>
      </View>
      {/* bottom Area */}
      <View style={{height:50,borderTopColor:'#DDDDDD',borderTopWidth:1,width:'100%',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          console.log("确定");
          dismissModelAndFindNext(()=>{
            findNextPopup(index);
          });
        }}>
          <Text style={{color : '#289178', fontSize:16, alignSelf:'center' }}>确定</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popUpStyle : {
    width : 280,
    height : 230,
    backgroundColor : 'white',
    borderRadius : 8,
  },
  popUpImgStyle : {
    width : 60,
    height : 60
  },
  popUpTitleStyle : {
    fontSize : 26
  },
  popUpDetailStyle : {
    fontSize : 14
  }
})