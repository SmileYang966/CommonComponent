import { Pressable, StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import Video from 'react-native-video'
import { showModel } from './component/ModelOperations'


const VentilationHaloMp4Url = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const marginX = 10;
const marginY = 10;


function VideoView(props){
  return (
    <View style={{width:ScreenWidth*0.9 , height:ScreenWidth * 0.675, backgroundColor:'white'}}>
      <Video source={{uri:VentilationHaloMp4Url}}
        controls={true}
        fullscreen={true}
        fullscreenOrientation={'landscape'}
        ref={(ref)=>{
          this.player = ref;
        }}
        style={styles.videoStyle}   
      />
    </View>
  );
}


export default class ReactVideoScreen extends Component {

  //H5->RN
  messageInfo(e) {
    this.setState({
      title: '隐私政策'
    });
  }

  onLoadEnd(e){
    let data = {
      version: 'v2.0.0'
    }
    this.webView && this.webView.postMessage(JSON.stringify(data));
  }

  onBuffer(e){

  }

  videoError(error){

  }

  buttonClick(){
    console.log("buttonClick");
    showModel(<VideoView/>);
  }


  render() {
    return ( 
      <View style={styles.container}>
        <Pressable onPress={(e) => this.buttonClick()} style={styles.buttonStyle}>
          <Text>弹出弹框</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyle : {
    width : 150,
    height : 40,
    backgroundColor : 'gray',
    marginTop : 50,
    alignSelf : 'center',
    justifyContent:'center',
    alignItems : 'center'
  },
  videoStyle : {
    width : '100%',
    height : '100%'
  }
})