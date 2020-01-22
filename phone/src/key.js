const key = '8S3Ep2d92LolyGhzG4G2GKI26hRxr9Ov'

export function initBMap() {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = `//api.map.baidu.com/api?v=2.0&ak=${key}`
    script.onload = resolve
    document.body.appendChild(script)
  })
}