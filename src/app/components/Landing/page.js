'use client'
import React from 'react'
import Column from './Column'
import Task from './Task'



export default function Home(){




  return(<div className='min-h-screen capitalize bg-black/70 text-white box-border '>
    <main className='flex  justify-around gap-8 w-1/2 mx-auto py-6'>
  <Column state='PLANNED'/>
  <Column state='ONGOING'/>
  <Column state='DONE'/>

  </main>
  </div>
    )
}