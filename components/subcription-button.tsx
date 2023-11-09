import React from 'react'
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({className, isPro}) => {
  return (
    <div className={className}>
      <Button>
        <span>{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        <Sparkles/>
      </Button>
    </div>
  )
}

export default SubcriptionButton