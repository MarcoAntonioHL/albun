import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdmiPage from '@/src/Aplicacion/AdmiPage'

import MenuLayout from '@/src/components/layout/menu'
import ThemeContext from '@/src/context/theme'

export default function Administrador() {
  const[user,setUser]=useState({
    user:'',
    password:''
  })

  const getProfile=async()=>{
    const response=await axios.get('/api/profile')
    console.log(response.data)
    setUser(response.data)
  }
 
  
  return (
    <ThemeContext>
        <MenuLayout titulo="Administrador">
          <button onClick={()=>getProfile()}>get</button>
          <div>Administrador {JSON.stringify(user.user)}</div>
          <AdmiPage/>
        </MenuLayout>
    </ThemeContext>
    
  )
}
