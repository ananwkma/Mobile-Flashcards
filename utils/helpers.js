import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date().toLocaleString()
  return todayUTC
}