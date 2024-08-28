import { Image, StyleSheet, Platform, Button, Text, Alert, TextInput, SafeAreaView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

// test

//import {Input, Button} from 'react-native-elements';

export default function HomeScreen() {


  const [count, setCount] = React.useState(0);

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);


  const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
      <SafeAreaView>
        <TextInput
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };


  const confirmPassword = () =>
    new Promise(resolve =>
      Alert.prompt(
        'Confirm Password',
        'Enter your current password for confirmation',
        [
          { text: 'Cancel', style: 'destructive', onPress: () => resolve(null) },
          { text: 'Confirm', onPress: resolve },
        ],
        'secure-text',
      ),
    );


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hola</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>


        <TextInput placeholder="John" />

        <ThemedText type="subtitle">hfhfg</ThemedText>


        <Text style={{ color: "green" }} >jhghjghhgg</Text>





        <Text style={{ color: "cyan", fontSize: 100, textAlignVertical: "center", textAlign: "center" }} onPress={() => setCount(0)} >Reset</Text>

        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>


          <Text style={{ color: "cyan", fontSize: 100 }} onPress={() => setCount(prev => prev + 1)} >+</Text>

          <Text style={{ color: "cyan", fontSize: 100 }} onPress={() => {

            if (count - 1 < 0) { return }

            setCount(prev => prev - 1)

          }} > - </Text>


        </View>



        <TextInput textAlign={'center'} style={{ color: "cyan", fontSize: 100 }} value={`${count}`} onChangeText={() => { }} />













        <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />


        <Button title={'secure'} onPress={confirmPassword} />

        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
