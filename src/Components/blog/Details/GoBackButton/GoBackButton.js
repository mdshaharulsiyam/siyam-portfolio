'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export const GoBackButton = () => {
    const router = useRouter();
  return <button onClick={()=>router.back()} style={{color:'red',textDecoration:'underline',padding:'5px 20px',cursor: 'pointer', fontSize:'16px', fontWeight:'bold'}}>back</button>
}
