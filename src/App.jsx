import { useState } from 'react'
import bg from './assets/bg/home_bg.png'
import Logo from './assets/bg/icone.jpg'
import './App.css'

export default function Example() {
  const [opened, setOpened] = useState(false);

  return (
    
    <div class="tham tham-e-squeeze tham-w-6">
    <div class="tham-box">
      <div class="tham-inner" />
    </div>
  </div>
  );
}
