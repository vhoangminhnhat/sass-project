"use client"
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store'
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

const SidebarsToggle = () => {
    const {isMinimal, handleSidebarChange, handleOpenOrClose} = useSidebarStore();
  return (
    <div>
        <div className={cn(
            "cursor-pointer hidden",
            "lg:block"
        )}
        onClick={handleSidebarChange} is-navbar-minimal={isMinimal ? "true" : undefined}>
            <Image src={`/icons/menu-${isMinimal ? "open" : "close"}.svg`} width={24} height={24} alt='navbar icon'/>
        </div>
        <Button variant={"ghost"} className='lg:hidden' size={"icon"} onClick={handleOpenOrClose}></Button>
    </div>
  )
}

export default SidebarsToggle