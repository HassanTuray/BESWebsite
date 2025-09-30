"use client"

import Card from "./card";

type GlowCardProps  = {
    children?: React.ReactNode;
    color: {r:number, g:number, b:number};
    opacity: number;
    glowCardWrapper?: string;
    cardWrapper?: string;
}

export default function GlowCard({children, color, opacity, glowCardWrapper, cardWrapper} : GlowCardProps) {
    const {r, g, b} = color;
    
    const className = "pointer-events-none inset-0 -z-10 rounded-2xl";
    return (
        <div className={className} 
            style={{ boxShadow: `0 0 40px 10px rgba(${r}, ${g}, ${b}, ${opacity})` }}
        >
            <Card cardWrapper={cardWrapper}>
                {children}
            </Card>
        </div>
        
    );
}

