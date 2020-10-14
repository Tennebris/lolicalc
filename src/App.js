import React, { useState,useRef, useEffect } from 'react';
import { Vibration, Text } from 'react-native';
import {Audio} from 'expo-av';

import {Container,Area,Teclado,Tecla,Campo} from './styles/app.style';

export default function App() {
  let a = ['1','2','3','4','5','6','7','8','9','C','0',','];
  const input = useRef();
  const [number, setNumber] = useState('');

  const loli = new Audio.Sound();

  useEffect(() => {
    const a = async () => {
      try{
        await Audio.requestPermissionsAsync();       
      }catch(error){
        console.warn(error)
      }
    }

    a();
  })

  return (
    <Container>
      
      <Area>
        <Campo editable={false} ref={input} value={number} ></Campo>
      </Area>

      <Teclado>
        {
          a.map((i,k) => (
            <Tecla
              key={k}
              onPress={() => {
                if(i == 'C') {
                  setNumber('');
                  input.current.clear();
                }else{
                  setNumber(number+i);
                }
                Vibration.vibrate(100);
                (async () => {
                  await loli.loadAsync(require('./assets/yamete_kudasai.mp3'));
                  await loli.playAsync();
                  await loli.unloadAsync();
                })();
              }}
            >
              <Text key={k} style={{fontSize: 28}} >{i}</Text>
            </Tecla>
          ))
        }
      </Teclado>

    </Container>
  );
}
