import { View, Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';



export const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setLoading(true);
    axios.get('https://5c3755177820ff0014d92711.mockapi.io/articles/')
      .then(({ data }) => {
        setItems(data);
      }).catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      }).finally(() => {
        setLoading(false);
      })
  }

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("FullPost", {id: item.id, title: item.title})}>
            <Post
              title={item.title}
              ImageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>

        )}
      />
    </View>
  );
}