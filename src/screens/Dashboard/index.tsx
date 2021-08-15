import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const handleHomeNavigation = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5}
        onPress={handleHomeNavigation}
      >
        <Text>Voltar para a Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})

export { Dashboard }