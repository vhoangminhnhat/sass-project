import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import React from 'react'
import Logo from '../logo';

interface SidebarsProps {
    className?: string;
    isProPlan?: boolean;
    userLimitCount: number;
}

const Sidebars: React.FC<SidebarsProps> = ({className, isProPlan, userLimitCount}) => {
    const {isMinimal} = useSidebarStore();
  return (
    <div className={cn(
        "text-white",
        className
    )}>
        <div className='h-20 pl-7 pr-6'>
            <div className='flex items-center justify-between w-full'>
                {
                    isMinimal && <Logo/>
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebars