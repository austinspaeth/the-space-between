import React from 'react';
import {Text, View} from 'react-360';
import {connect} from '../Store';

class PreSunLabel extends React.Component {
  render() {
	  console.log('props', this.props)
    return (
      <View
        style={{
			width:600,
			height:600,
			opacity: this.props.labels ? 1:0,
			display:'flex',
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
        }}>
			<View
				style={{
					width:40,
					height:40,
					borderRadius:150,
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
				S U N
			</Text>
      </View>
    );
  }
}

const SunLabel = connect(PreSunLabel);

export default SunLabel