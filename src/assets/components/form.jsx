import React from 'react'

export function Button({ type = "button", className, children, ...props }) {
    return (
      <button
        type={type}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
}

export function Input({ className, ...props }) {
  return (
    <input
      className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700 font-medium mb-1">
      {children}
    </label>
  );
}

export function Card({ className, children }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}