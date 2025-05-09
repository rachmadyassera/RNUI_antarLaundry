import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  IconAddSaldo,
  IconGetPoint,
  IconKiloan,
  IconSatuan,
  IconVip,
  IconKarpet,
  IconSetrika,
  IconExpress,
} from '../../assets';
import React from 'react';
import {WARNA_SKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;
    if (title === 'Get Point') return <IconGetPoint />;
    if (title === 'Kiloan') return <IconKiloan />;
    if (title === 'Satuan') return <IconSatuan />;
    if (title === 'Vip') return <IconVip />;
    if (title === 'Karpet') return <IconKarpet />;
    if (title === 'Setrika Saja') return <IconSetrika />;
    if (title === 'Express') return <IconExpress />;
    return <IconAddSaldo />;
  };

  return (
    <View>
      <TouchableOpacity style={styles.container(type)}>
        <View style={styles.button}>
          <Icon />
        </View>
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'layanan' ? windowWidth * 0.038 : 0,
    marginRight: type === 'layanan' ? windowWidth * 0.048 : 0,
    marginLeft: type === 'layanan' ? windowWidth * 0.048 : 0,
  }),
  button: type => ({
    backgroundColor: WARNA_SKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
