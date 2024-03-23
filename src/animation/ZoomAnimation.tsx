'use client'
import React, { ReactNode } from 'react'
import { Zoom } from 'react-awesome-reveal'

export default function ZoomAnimation({ duration, triggerOnce, className, children }: { duration: number, triggerOnce?: boolean, className?: string, children: React.ReactNode }): ReactNode {
    return (
        <Zoom duration={duration} triggerOnce={triggerOnce} className={className}>
            {children}
        </Zoom>
    )
}
