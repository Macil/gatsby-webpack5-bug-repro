import React, { useEffect } from "react"

export default function WorkerDemo() {
  useEffect(() => {
    const worker = new Worker(new URL("../workerEntry.js", import.meta.url))

    return () => {
      worker.terminate()
    }
  })

  return (
    <div>
      Web worker demo page. The console should show "hello from web worker!" if
      the worker loaded correctly.
    </div>
  )
}
