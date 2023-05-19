import { Pressable, StyleSheet, Text, View,Dimensions, DeviceEventEmitter, TouchableOpacity } from 'react-native'
import React, { Component, useRef, useState, useEffect } from 'react'
import { WebView } from 'react-native-webview'
import Video from 'react-native-video'
import { dismissModel, showModel } from './component/ModelOperations'


const VentilationHaloMp4Url = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const marginX = 10;
const marginY = 10;


function VideoView(props){
  const videoRef = useRef(null)
  const { enterFullScreenAction , screenStyle} = props;
  const [enterFullScreenActionClicked,setEnterFullScreenActionClicked] = useState(false)
  const [videoStyle,setVideoStyle] = useState(screenStyle);

  useEffect(()=>{
    // setVideoStyle(screenStyle);
    // 判断横屏，还是竖屏
    const { height, width } = screenStyle;
    if(height >= width){//竖屏
      setVideoStyle({
        width : width,
        height : width * 0.75
      })
    }else{//横屏
      setVideoStyle({
        width : width,
        height : height
      })
    }
  },[screenStyle])

  return (
    // <View style={{width:ScreenWidth, height:ScreenWidth * 0.675 , backgroundColor:'white'}}>
    <View>
      <Video source={{uri:VentilationHaloMp4Url}}
        // controls={true}
        // fullscreen={true}
        // allowsExternalPlayback={false}
        // useTextureView={false}
        Focusable={false}
        // resizeMode={'contain'}
        // paused={true}
        // fullscreenOrientation={'landscape'}
        // onProgress={(progress)=>{
        //   console.log(progress.currentTime,progress.playableDuration,progress.seekableDuration);
        // }}
        ref={videoRef}
        style={videoStyle}>
        </Video>

        <View style={{height:40,width:'100%',backgroundColor:'red',position:'absolute',bottom:0,justifyContent:'center'}}>
          <Pressable onPress={()=>{
            console.log("Pressable sss");
            enterFullScreenAction && enterFullScreenAction(!enterFullScreenActionClicked);
            setEnterFullScreenActionClicked(!enterFullScreenActionClicked);

            }} style={{height:40,backgroundColor:'blue',position:'absolute',right:0,justifyContent:'center'}}>
            <Text>{enterFullScreenActionClicked ? '退出全屏' : '全屏播放'}</Text>
          </Pressable> 
        </View>  
    </View>
  );
}

function FullScreen(props){

  const [screenStyle,setScreenStyle] = useState({width:ScreenWidth,height:ScreenHeight})
  const [enterFullScreenActionClicked,setEnterFullScreenActionClicked] = useState(false)

  useEffect(() => {
    DeviceEventEmitter.addListener("ModelLayoutChange",(layout)=>{
      console.log("aaabbb ccccddd ",layout);
      setScreenStyle({width:layout.width,height:layout.height});
    })
  }, [])
  

  const videoLayout = (event) => {
    console.log("FullScreen---",event.nativeEvent.layout)
  }

  return (
    <TouchableOpacity style={{...screenStyle,flex:1,justifyContent:'center', backgroundColor : enterFullScreenActionClicked ? 'black' : 'transparent' }} onLayout={videoLayout} onPress={()=>{
      dismissModel();
    }}>
      <VideoView enterFullScreenAction={(result)=>{
        console.log("enterFullScreenAction");
        setEnterFullScreenActionClicked(result)
      }} screenStyle={screenStyle}/>
    </TouchableOpacity>
  );
}


export default class ReactVideoScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      isFullScreen : false,
      layout : {}
    }
  }

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
    // showModel(<VideoView/>);

    // this.setState({
    //   isFullScreen : !this.state.isFullScreen
    // })

    showModel(
      <FullScreen/>
    )
  }

  layoutEvent(event){
    console.log('弹窗尺寸11', event.nativeEvent.layout.width, event.nativeEvent.layout.height,"aaab",event.nativeEvent.layout)
    this.setState({
      layout : event.nativeEvent.layout
    })
  }


  render() {
    return (
      <View style={styles.container} onLayout={layout => this.layoutEvent(layout)}>
        <Pressable onPress={(e) => this.buttonClick()} style={styles.buttonStyle}>
          <Text>弹出弹框</Text>
        </Pressable>

        {/* <VideoView/> */}
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
  },
  videoStyle1 : {
    width : '100%',
    height : 250,
  }
})