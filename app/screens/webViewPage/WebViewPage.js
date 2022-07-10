import { useRef, useState } from 'react';
import { Button } from 'react-native';
import { WebView } from 'react-native-webview';

function WebViewPage({ navigation, route }) {
  const webViewRef = useRef();
  const [triggered, fireTriggered] = useState(false);

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
        injectedJavaScript={` if(${triggered}){var elements = document.getElementsByTagName('*');
        for(var i=0; i<elements.length; i++){
          elements[i].style.backgroundColor='red';
        }}`}
        style={{ marginTop: 20 }}
      />
      <Button
        title={triggered ? 'White' : 'RED'}
        onPress={() => {
          fireTriggered(!triggered);
          changeColor();
        }}
      />
    </>
  );
}

export default WebViewPage;
