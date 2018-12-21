import { AsyncStorage } from 'react-native'

export function getDecks () {
  console.log("reachedasldkfjasd")
  //console.log('storage ', AsyncStorage.getAllKeys())
  console.log('letsseeifthisworks ', AsyncStorage.getItem("12/20/2018, 7:40:35 PM"))
  return AsyncStorage.getAllKeys()
    //.then(formatCalendarResults)
}

export function submitEntry ({ entry, key }) {
  console.log('entry ', entry)
  console.log('key ', key)
  return AsyncStorage.mergeItem(key, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(key)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(key, JSON.stringify(data))
    })
}