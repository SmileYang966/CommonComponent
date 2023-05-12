import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import RootSiblings from 'react-native-root-siblings';

let siblings = null;
function showModel(WrappedComponent) {
  if(!siblings){
    siblings = new RootSiblings(
      <Pressable style={styles.modelBg} onPress={()=>{
        dismissModel();
      }}>
        <Pressable>
          {
            WrappedComponent
          }
        </Pressable>
      </Pressable>
    )
  }
}

function dismissModel(){
  siblings && siblings.destroy()
  siblings = null
}


function showMultiPopupModelAndFindNext(WrappedComponent,findNextAction) {
  if(!siblings){
    siblings = new RootSiblings(
      <Pressable style={styles.modelBg} onPress={()=>{
        dismissModelAndFindNext(findNextAction);
      }}>
        <Pressable>
          {
            WrappedComponent
          }
        </Pressable>
      </Pressable>
    )
  }
}

function dismissModelAndFindNext(findNextAction){
  siblings && siblings.destroy()
  siblings = null
  findNextAction && findNextAction();
}

export {
  showModel,
  dismissModel,
  showMultiPopupModelAndFindNext,
  dismissModelAndFindNext
}

const styles = StyleSheet.create({
  modelBg : {
    position: 'absolute',
    flex:1,
    backgroundColor: 'rgba(4, 4, 15, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent : 'center',
    alignItems : 'center'
  }
})