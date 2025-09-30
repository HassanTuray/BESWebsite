"use client"

type CardProps = {
    children?: React.ReactNode;
    cardWrapper?: string;
}

export default function Card({children, cardWrapper} : CardProps ) {
    
    const className = ["min-h-[14rem] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg", cardWrapper].join(" ")
    return (
        <div className= {className}>
            {children}
        </div>
    );
}