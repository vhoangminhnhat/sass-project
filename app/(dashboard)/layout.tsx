import React from 'react'
import Topbar from '@/components/topbar'
import { cn } from '@/lib/utils'
import Sidebars from '@/components/sidebars'

const DashboardLayout = (props: {
    children: React.ReactNode
}) => {
  return (
    <div>
      <header>
        <Topbar/>
      </header>
      <main className={cn(
        "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
      )}>
        <Sidebars userLimitCount={0}/>
      </main>
      {props.children}
    </div>
  )
}

export default DashboardLayout