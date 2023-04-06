import React from 'react'

const Page = ({params}) => {
    const keyword=params.keyword;
    console.log(keyword)
  return (
    <div>page</div>
  )
}

export default Page