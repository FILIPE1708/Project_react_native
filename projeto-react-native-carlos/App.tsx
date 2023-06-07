import * as React from 'react';
import { NavegacaoPrincipal } from './src/screens/navigations';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/config/firebase-config';


export default function App() {
  initializeApp(firebaseConfig);
  return (<NavegacaoPrincipal/>);
}
