import React from 'react'
import PersonalizarProducto from '@/src/Aplicacion/UsuarioPage/Pesonalizacion'
import MenuLayout from '@/src/components/layout/menu'
import ThemeContext from '@/src/context/theme'
export default function Pesonalizacion() {
  return (
    <ThemeContext>
        <MenuLayout titulo='Personalizacion'>
    
            <PersonalizarProducto/>
            
        </MenuLayout>
    </ThemeContext>
    
  )
}
