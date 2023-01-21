import { View, ActivityIndicator, Text } from 'react-native';
import React from 'react';

export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Загрузка...</Text>
    </View>
  )
}