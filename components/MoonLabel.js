import React from 'react';
import {Text, View} from 'react-360';
import {connect} from '../Store';


class PreMoonLabel extends React.Component {
  render() {
    return (
      <View
        style={{
			width:200,
			height:50,
			opacity: this.props.labels ? 1:0,
			display:'flex',
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
			
        }}>
			<View
        style={{
	
	
			width:50,
			height:50,
			borderRadius:100,
			borderWidth:0,
			backgroundColor:'transparent',
			borderColor:'#007fff',
			borderStyle:'solid',
        }}></View>
       <Text style={{
		   fontSize:20,
		   marginLeft:10,
		   paddingLeft:50,
		   fontWeight:'900',
		   color:'#007fff',
	   }}>
		   M O O N
	   </Text>
      </View>
    );
  }
}

const MoonLabel = connect(PreMoonLabel);

export default MoonLabel;