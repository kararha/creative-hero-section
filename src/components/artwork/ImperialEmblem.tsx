/**
 * Minimalist custom legion-inspired emblem:
 * Ancient Roman eagle and laurel wreath geometry merged with modern cybersecurity shield.
 */
export default function ImperialEmblem({ className = "w-6 h-6", color = "#B69A75" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer subtle shield outline */}
      <path
        d="M24 5L40 10V24C40 34 24 43 24 43C24 43 8 34 8 24V10L24 5Z"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner imperial laurel leaves - left branch */}
      <path
        d="M17 18C15 20 15 24 17 26C18 24 19 21 17 18Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M15 24C13.5 26.5 14 30 16.5 31.5C17.5 29.5 17.5 26.5 15 24Z"
        fill={color}
        fillOpacity="0.85"
      />
      
      {/* Inner imperial laurel leaves - right branch */}
      <path
        d="M31 18C33 20 33 24 31 26C30 24 29 21 31 18Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M33 24C34.5 26.5 34 30 31.5 31.5C30.5 29.5 30.5 26.5 33 24Z"
        fill={color}
        fillOpacity="0.85"
      />
      
      {/* Central imperial spear tip / cipher key */}
      <path
        d="M24 11L27.5 17L24 22L20.5 17L24 11Z"
        fill={color}
      />
      <line
        x1="24"
        y1="22"
        x2="24"
        y2="36"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="28"
        x2="28"
        y2="28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
