"use client"

export function DataBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Neural network nodes - scattered across the page */}
      <svg className="absolute top-20 left-10 w-64 h-64 opacity-10 dark:opacity-15 text-primary" viewBox="0 0 200 200">
        <circle cx="40" cy="40" r="8" fill="currentColor" />
        <circle cx="100" cy="20" r="6" fill="currentColor" />
        <circle cx="160" cy="50" r="8" fill="currentColor" />
        <circle cx="30" cy="100" r="6" fill="currentColor" />
        <circle cx="100" cy="100" r="10" fill="currentColor" />
        <circle cx="170" cy="110" r="6" fill="currentColor" />
        <circle cx="50" cy="160" r="8" fill="currentColor" />
        <circle cx="110" cy="180" r="6" fill="currentColor" />
        <circle cx="160" cy="160" r="8" fill="currentColor" />
        <line x1="40" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="20" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="170" y1="110" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="100" x2="50" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="100" x2="110" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="100" x2="160" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Scatter plot - top right */}
      <svg className="absolute top-40 right-20 w-48 h-48 opacity-10 dark:opacity-15 text-accent" viewBox="0 0 100 100">
        <circle cx="15" cy="75" r="4" fill="currentColor" />
        <circle cx="25" cy="60" r="3" fill="currentColor" />
        <circle cx="35" cy="65" r="4" fill="currentColor" />
        <circle cx="45" cy="45" r="3" fill="currentColor" />
        <circle cx="55" cy="50" r="4" fill="currentColor" />
        <circle cx="65" cy="35" r="3" fill="currentColor" />
        <circle cx="75" cy="30" r="4" fill="currentColor" />
        <circle cx="85" cy="20" r="3" fill="currentColor" />
        <line x1="10" y1="85" x2="90" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
      </svg>

      {/* Bar chart - bottom left */}
      <svg className="absolute bottom-40 left-20 w-40 h-32 opacity-10 dark:opacity-15 text-primary" viewBox="0 0 120 80">
        <rect x="10" y="50" width="15" height="30" fill="currentColor" rx="2" />
        <rect x="30" y="35" width="15" height="45" fill="currentColor" rx="2" />
        <rect x="50" y="20" width="15" height="60" fill="currentColor" rx="2" />
        <rect x="70" y="40" width="15" height="40" fill="currentColor" rx="2" />
        <rect x="90" y="25" width="15" height="55" fill="currentColor" rx="2" />
      </svg>

      {/* Pie chart segments - middle right */}
      <svg className="absolute top-1/2 right-10 w-32 h-32 opacity-10 dark:opacity-15 text-accent" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" strokeDasharray="75 175" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" strokeDasharray="50 200" strokeDashoffset="-75" opacity="0.6" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="20" strokeDasharray="125 125" strokeDashoffset="-125" opacity="0.3" transform="rotate(-90 50 50)" />
      </svg>

      {/* Line chart - bottom right */}
      <svg className="absolute bottom-20 right-40 w-56 h-32 opacity-10 dark:opacity-15 text-primary" viewBox="0 0 140 60">
        <polyline
          points="10,50 30,40 50,45 70,25 90,30 110,15 130,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="10" cy="50" r="3" fill="currentColor" />
        <circle cx="30" cy="40" r="3" fill="currentColor" />
        <circle cx="50" cy="45" r="3" fill="currentColor" />
        <circle cx="70" cy="25" r="3" fill="currentColor" />
        <circle cx="90" cy="30" r="3" fill="currentColor" />
        <circle cx="110" cy="15" r="3" fill="currentColor" />
        <circle cx="130" cy="20" r="3" fill="currentColor" />
      </svg>

      {/* Binary code pattern - scattered */}
      <div className="absolute top-1/3 left-1/4 font-mono text-xs opacity-[0.04] dark:opacity-[0.06] text-primary select-none">
        01001101 01001100<br/>
        10110010 01101001<br/>
        01010100 10101010
      </div>

      {/* Another neural network - bottom center */}
      <svg className="absolute bottom-60 left-1/2 -translate-x-1/2 w-72 h-48 opacity-10 dark:opacity-15 text-accent" viewBox="0 0 240 120">
        {/* Input layer */}
        <circle cx="30" cy="30" r="6" fill="currentColor" />
        <circle cx="30" cy="60" r="6" fill="currentColor" />
        <circle cx="30" cy="90" r="6" fill="currentColor" />
        {/* Hidden layer */}
        <circle cx="120" cy="20" r="6" fill="currentColor" />
        <circle cx="120" cy="50" r="6" fill="currentColor" />
        <circle cx="120" cy="80" r="6" fill="currentColor" />
        <circle cx="120" cy="100" r="6" fill="currentColor" />
        {/* Output layer */}
        <circle cx="210" cy="45" r="6" fill="currentColor" />
        <circle cx="210" cy="75" r="6" fill="currentColor" />
        {/* Connections - input to hidden */}
        <line x1="36" y1="30" x2="114" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="36" y1="30" x2="114" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="36" y1="60" x2="114" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="36" y1="60" x2="114" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="36" y1="90" x2="114" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="36" y1="90" x2="114" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        {/* Connections - hidden to output */}
        <line x1="126" y1="20" x2="204" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="126" y1="50" x2="204" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="126" y1="50" x2="204" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="126" y1="80" x2="204" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="126" y1="100" x2="204" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  )
}
