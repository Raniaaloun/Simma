import { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

function WebViewPage() {
  const webViewRef = useRef();
  const [triggered, fireTriggered] = useState(false);

  const jsCode = `if(${triggered}){
    var elements = document.getElementsByTagName('*');
    for(var i=0; i<elements.length; i++){
      elements[i].style.backgroundColor='red';
    }
  }`;

  const changeColor = () => {
    webViewRef.current.reload();
  };

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://ar.shein.com/',
        }}
        injectedJavaScript={jsCode}
        style={{ marginTop: 20 }}
      />
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            fireTriggered(!triggered);
            changeColor();
          }}
          style={styles.button}
        >
          <Text style={styles.text}>{triggered ? 'White' : 'RED'}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default WebViewPage;
