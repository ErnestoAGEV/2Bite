import React from 'react'
import { Button, Text, View } from 'react-native'
import useViewModel from './ViewModel'
import { RootStackParamList } from '../../../../../App';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'>{};
export const ProfileInfoScreen = ({navigation, route}: Props) => {

  const { removeSession } = useViewModel();

  return (
     <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
        onPress={() => {
          removeSession();
          navigation.navigate('HomeScreen');
        }}
        title = 'Cerrar sesión'
        />
    </View>
    )
}
