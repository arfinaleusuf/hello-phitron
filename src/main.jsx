import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ShopingList from './components/ShopingList'
import Users from './components/Users'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Users/>
    <Counter/>
    <Profile/>
    <ShopingList/>
  </StrictMode>,
)
