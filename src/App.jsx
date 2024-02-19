import React from 'react'
import {useSelector} from 'react-redux'
import Infos from './components/Infos/Infos';
import Logos from './components/Logos/Logos';

export default function App() {
  const infos = useSelector((state) => state.infos)
  const logos = useSelector((state) => state.logos.img)
  return (
    <div className='App'>
      <Infos/>
    </div>
  )
}
