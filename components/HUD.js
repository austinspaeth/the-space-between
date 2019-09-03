import React from 'react';
import {connect, setCurrent} from '../Store';
import {Text, VrButton,asset, NativeModules, View} from 'react-360';
const {AudioModule} = NativeModules;

class PreHud extends React.Component {

	componentDidMount(){
		AudioModule.playEnvironmental({
			source: asset('music/music.mp3'),
			volume: 0.05, // play at 3/10 original volume
		  });
	}
  render() {
    return (
      <View
        style={{
			display:'flex',
			justifyContent:'flex-end',
			alignItems:'center',
			   layoutOrigin: [0, 0],
			width:1000,
			height:600,
            transform: [{translate: [0, 0, 0]}],
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '900',
            layoutOrigin: [0, 0],
			color:'#fff',
			
         
            transform: [{translate: [0, 0, 0]}],
          }}>
          T H E  S P A C E  B E T W E E N
        </Text>
		<VrButton onClick={() => {console.log('hud'),setCurrent(!this.props.labels)}}>
			<Text style={{fontSize:20, fontWeight:'700', color:'#999', marginTop:10, }}>{this.props.labels ? 'HIDE LABELS': 'SHOW LABELS'}</Text>
		</VrButton>
      </View>
    );
  }
}

const Hud = connect(PreHud);

export default Hud;