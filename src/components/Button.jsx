import React from 'react'

const Button = ({ content, color }) => {
  const buttonColors = {
    "dark-blue": "bg-black text-lg cursor-pointer border-1 border-[rgba(0,0,255,0.5)] px-3 py-2.5 rounded shadow-[0_0px_4px_rgba(0,0,255,.5)] hover:bg-blue-600",
    "blue": "bg-blue-600 rounded px-2 py-2 cursor-pointer shadow-[0_0px_6px_rgba(0,0,255,.5)] hover:bg-black hover:border-1 hover:border-[rgba(0,0,255,0.5)]",
    "purple": "bg-purple-600",
    "green": "bg-green-600"
  }
  return (
    <button className={buttonColors[color]} >{content}</button>
  )
}

export default Button
