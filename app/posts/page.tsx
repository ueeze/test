import React from 'react'

export default function Postspage() {
  const title = '애국가'
  const content = '동해물과 백두산이....'
  return (
    <div>
      <h1 className="text-3x1 font-bold text-red-700"> 포스트 페이지</h1>
      <p> Titile: {title}</p>
      <p> Content: {content}</p>
    </div>
  )
}
