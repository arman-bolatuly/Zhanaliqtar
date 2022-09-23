import { StatusBar } from 'expo-status-bar';
import { View, Alert } from 'react-native';
import { Post } from './components/pages/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function App() {
  //const [items, setItems] = useState();
  // useEffect(() => {
  //   axios.get('https://5c3755177820ff0014d92711.mockapi.io/articles/' + id).then(({data}) => {
  //     setItems(data);
  //   }).catch(err => {
  //     console.log(err);
  //     Alert.alert('Ошибка', 'Не удалось получить статью');
  //   })
  // }, []);
  return (
    <View>
      <Post title="Test" ImageUrl="https://www.meme-arsenal.com/memes/d97d8aaf1a3b889eb1c737416bdea21e.jpg" createdAt="23/09/2022" />
      <StatusBar theme="auto"/>
    </View>
  );
}