import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

export default function cameraScreen() {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.base64;

      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);

        let base64Img = `data:image/jpg;base64,${source}`;
        let apiUrl =
          'https://api.cloudinary.com/v1_1/itachi12/image/upload';
        let data = {
          file: base64Img,
          upload_preset: 'myUploadPreset'
        };

        fetch(apiUrl, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        })
          .then(async response => {
            let data = await response.json();
            if (data.secure_url) {
              alert('Upload successful');
            }
          })
          .catch(err => {
            alert('Cannot upload');
            console.log(err);
          });
      }
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        onCameraReady={onCameraReady}
        useCamera2Api={true}
      />
      <View style={styles.container}>
        {isPreview && (
          <TouchableOpacity
            onPress={cancelPreview}
            style={styles.closeButton}
            activeOpacity={0.7}
          >
            <AntDesign name='close' size={32} color='#fff' />
          </TouchableOpacity>
        )}
        {!isPreview && (
          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
              <MaterialIcons name='flip-camera-ios' size={28} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={!isCameraReady}
              onPress={onSnap}
              style={styles.capture}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  text: {
    color: '#fff'
  },
  bottomButtonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 28,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A45FF',
    opacity: 0.7
  },
  capture: {
    backgroundColor: '#5A45FF',
    borderRadius: 5,
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    marginBottom: 28,
    marginHorizontal: 30
  }
});



















































// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null)
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [isCameraReady, setIsCameraReady] = useState(false);
//   useEffect(() => {
//       (async () => {
//         const { status } = await Camera.requestCameraPermissionsAsync();
//         setHasPermission(status === 'granted');
//       })();
//     }, []);
//   if (hasPermission === null) {
//       return <View />;
//     }
//     if (hasPermission === false) {
//       return <Text>No access to camera</Text>;
//     }
//     const onCameraReady = () => {
//       setIsCameraReady(true);
//     };
//     return (
//       <View style={{ flex: 1 }}>
//         <Camera style={{ flex: 1 }} onCameraReady={onCameraReady} type={type} ref={ref => {
//           setCameraRef(ref) ;
//       }}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             justifyContent: 'flex-end'
//           }}>
//           <TouchableOpacity
//             style={{
//               flex: 0.1,
//               alignSelf: 'flex-end'
//             }}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
//             if(cameraRef){
//               let photo = await cameraRef.takePictureAsync();
//               console.log('photo', photo);
//             }
//           }}>
//             <View style={{ 
//                borderWidth: 2,
//                borderRadius:50,
//                borderColor: 'white',
//                height: 50,
//                width:50,
//                display: 'flex',
//                justifyContent: 'center',
//                alignItems: 'center'}}
//             >
//               <View style={{
//                  borderWidth: 2,
//                  borderRadius:50,
//                  borderColor: 'white',
//                  height: 40,
//                  width:40,
//                  backgroundColor: 'white'}} >
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }