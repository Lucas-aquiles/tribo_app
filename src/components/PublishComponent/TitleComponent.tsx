import {View, Text, ImageBackground} from 'react-native';
import styleTitle from './TitleComponent.sass';
import {Props} from './interface';

export default function TitleComponent({width}: Props) {
  return (
    <View style={[styleTitle.ContainerOne, {width: width}]}>
      <View style={styleTitle.ContainerTwo}>
        <View style={styleTitle.ContainerThree}>
          <ImageBackground
            source={require('../../assets/images/PublishEvent/fire.png')}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </View>
        <Text style={styleTitle.TextTitle}>Incendio</Text>

        <View style={styleTitle.BotonStyle}>
          <Text style={styleTitle.TextBoton}>Seguridad</Text>
        </View>
      </View>
    </View>
  );
}
