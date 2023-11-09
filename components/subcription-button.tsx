"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({className, isPro}) => {
  const [loading, setLoading] = useState();

  const handleSubcribe = () => {
    
  }
  return (
    <div className={className}>
      <Button variant={'outline'} size={'lg'} disabled={loading} onClick={handleSubcribe} className={cn(
        'text-white w-full font-semibold border-none gradient-button',
        "hover:text-white"

      )}>
        <span>{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        <Sparkles/>
      </Button>
    </div>
  )
}

export default SubcriptionButton