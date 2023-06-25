import React from 'react'

type Props = {
    searchText : string
}

export default function Result({searchText} : Props) {
  return (
    <div>Result : {searchText}</div>
  )
}
