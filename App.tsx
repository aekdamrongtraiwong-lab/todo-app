import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Todoscreen from './todofeathere/todoscreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <KeyboardAvoidingView behavior='padding' >
          <Pressable onPress={() => Keyboard.dismiss()}>
            <StatusBar style="auto" />
            <Todoscreen />
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
