import React from "react"

export default function Resource() {
  const imageUrl = new URL("../trolley-wave.jpg", import.meta.url)

  console.log("imageUrl", imageUrl.href, imageUrl)

  return (
    <div>
      <p>Here's an image:</p>
      <p>
        <img src={imageUrl.href} alt="test" />
      </p>
    </div>
  )
}
