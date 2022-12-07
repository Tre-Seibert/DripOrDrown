import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebaseConfig from '/Users/treseibert/Documents/Courses/Software-Engineering/DripOrDrown/DripOrDrown/firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export var url;
export var theURL;
global.Buffer = global.Buffer || require('buffer').Buffer

initializeApp(firebaseConfig);


export default function ImagePickerExample() {
  
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
    var inputPath = {uri: result.uri};
    const storage = getStorage();
    const reference = ref(storage, 'image.jpg');

    const img = await fetch(result.uri);
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
    </View>
  );
}