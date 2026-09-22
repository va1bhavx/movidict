export function getLocalStorageItem(key: string) {
  if (typeof window === "undefined") {
    return null
  }

  const data = window.localStorage.getItem(key)
  if (data) {
    const keyData = JSON.parse(data)
    return keyData
  } else {
    console.log("User data not found in local storage")
  }
}
export function setLocalStorageItem(key: string, value: unknown) {
  if (typeof window === "undefined") {
    return null
  }

  const savedItem = window.localStorage.setItem(key, JSON.stringify(value))
  return savedItem
}
export function deleteOneLocalStorageItem(key: string) {
  // const
}
export function removeLocalStorageItem() {}
