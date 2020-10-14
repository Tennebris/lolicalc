import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #e3e3e3;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    align-items: flex-end;

    padding: 0 10px;
`;

export const Teclado = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap
`;

export const Tecla = styled.TouchableOpacity`
    width: 31.4%;
    height: 23%;
    justify-content: center;
    align-items: center;
`

export const Campo = styled.TextInput`
    background-color: blue;
    color: white;
    margin: 20px 0; 
`