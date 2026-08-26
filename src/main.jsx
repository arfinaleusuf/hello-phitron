import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ShopingList from './components/ShopingList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
    <Profile/>
    <ShopingList/>
  </StrictMode>,
)
