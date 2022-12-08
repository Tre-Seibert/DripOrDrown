import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export var url;
export var theURL;
global.Buffer = global.Buffer || require('buffer').Buffer
const firebaseConfig = {
  apiKey: "AIzaSyAF9QW9bvXKyWIiPpmaOgKunA51Jxe4iAw",
  authDomain: "dripordrown-90905.firebaseapp.com",
  databaseURL: "https://dripordrown-90905-default-rtdb.firebaseio.com",
  projectId: "dripordrown-90905",
  storageBucket: "dripordrown-90905.appspot.com",
  messagingSenderId: "217796469697",
  appId: "1:217796469697:web:3324196fa615c8c4f6c540",
  measurementId: "G-F0RSLNR2DY",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');


export default function ImagePickerExample() {
  async function crop(theURL) {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_url', theURL);
    
    axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
    headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'kLJT2Gev5QbZe5epeexwrrKn',
    },
    encoding: null
    })
    .then((response) => {
    if(response.status != 200) return console.error('Error:', response.status, response.statusText);
    fs.writeFileSync("no-bg.png", response.data);
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });
  }
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    console.log(result);
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    var inputPath = {uri: result.assets[0].uri};
    
    const reference = ref(storage, 'image.jpg');

    const img = await fetch(result.assets[0].uri);
    const bytes = await img.blob();

    uploadBytes(reference, bytes);
    
    getDownloadURL(ref(storage, 'image.jpg'))
      .then((url) => {
        console.log(url);
        console.log("test");
      })
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick an image from camera roll" onPress={() => crop(image)} />
    </View>
  );
}