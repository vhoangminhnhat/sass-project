
"use client"
import { useSidebarStore } from '@/stores/sidebar-store';
import React from 'react'
import Logo from '../logo';
import SidebarsToggle from './sidebars-toggle';
import { UserButton, useUser } from '@clerk/nextjs';
import { MAX_FREE_COUNTS } from '@/constants';
import { cn } from '@/lib/utils';
import { Progress } from '../ui/progress';
import Navbar from './navbar';
import SubcriptionButton from '../subcription-button';
import ThemeToggle from './theme-toggle';

interface SidebarsProps {
    className?: string;
    isProPlan?: boolean;
    userLimitCount: number;
}

const Sidebars: React.FC<SidebarsProps> = ({className, isProPlan, userLimitCount}) => {
    const {isMinimal} = useSidebarStore();
    const {user} = useUser()
  return (
    <div className={cn(
        "text-white",
        className
    )}>
        <div className='h-20 pl-7 pr-6'>
            <div className='flex items-center justify-between w-full'>
                {
                    !isMinimal && <Logo/>
                }
                <SidebarsToggle/>
            </div>
        </div>
        <div className='grow overflow-y-auto scroll-smooth scrollbar-none'>
            <Navbar/>
        </div>
        <div className={cn(
            "fixed bottom-8 left-4 right-4",
            "lg:left-7 lg:right-auto",
            isMinimal && "lg:left-3"
        )}>
            <div className='mb-4 p-4 rounded-lg bg-gray-900'>
                <div className='mb-4 flex items-center'>
                    <UserButton afterSignOutUrl='/'/>
                    {
                        !isMinimal &&
                        <span className='text-sm ml-4'>
                            {user?.emailAddresses?.[0]?.emailAddress}
                        </span>
                    }
                </div>
                {
                    isMinimal && <div className='border-t border-t-gray-950 pt-2'>
                        {
                            !isProPlan && <div className='mb-4'>
                                <div className='text-center mb-2 text-muted-foreground font-semibold'>
                                        {userLimitCount}/{MAX_FREE_COUNTS} Free generations
                                </div>
                                <Progress value={(userLimitCount/MAX_FREE_COUNTS) * 100} className='bg-gray-50 h-3' indicatorClassName='gradient-button'/>
                            </div>
                        }
                        <SubcriptionButton isPro={isProPlan}/>
                    </div>
                }
            </div>
            <ThemeToggle/>
        </div>
    </div>
  )
}

export default Sidebars