import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import axios from 'axios';
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
width: 100%;
height: 250px;
border-radius: 10px;
margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export const FullPostScreen = ({route, navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const {id, title} = route.params;

  useEffect(() => {
    navigation.setOptions({title: title});
    axios.get('https://5c3755177820ff0014d92711.mockapi.io/articles/' + id)
      .then(({ data }) => {
        setData(data);
      }).catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      }).finally(() => {
        setLoading(false);
      })
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <View style={{padding: 20}}>
      <PostImage source={{ uri: 
      data.imageUrl
      }} />
      <PostText>
        {data.text}
      </PostText>
    </View>
  )
}