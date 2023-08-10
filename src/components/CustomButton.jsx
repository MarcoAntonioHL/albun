import { Button } from '@mui/material'
import React from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Link from 'next/link';
export default function CustomButton() {
  return (
    <>
            <Link href='/personalizarProducto'>
                <Button
                    startIcon={<DashboardCustomizeIcon />}
                    sx={{
                        color:'#1D2948',
                        marginY: 2
                    }}
                    variant="contained"
                    color='primary'
                    fullWidth
                >
                    Personalizar
                </Button>
            </Link>
        </>
  )
}
