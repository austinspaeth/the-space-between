import React from 'react';
import {Text, View} from 'react-360';
import {connect} from '../Store';

class PreEarthLabel extends React.Component {
  render() {
    return (
      <View
        style={{
			width:600,
			height:600,
			display:'flex',
			opacity: this.props.labels ? 1:0,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
        }}>
			<View
				style={{
					width:240,
					height:240,
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
				E A R T H
			</Text>
      </View>
    );
  }
}

const EarthLabel = connect(PreEarthLabel);

export default EarthLabel;