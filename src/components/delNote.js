import React from 'react'
import * as Notifications from "expo-notifications"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function delNote() {
  if (Notes.id === undefined) {
    Alert.alert(
        'ERROR',
        'ID is undefined!',
        [
            {
                text:'OK',
                style:'cancel'
            }
        ]
    )
  } else {
    try {
        let data = JSON.parse(await AsyncStorage.getItem('notes'));
        for (let i = 0; i < data.length; i++) {
            if(data[i].id === note.id) {
                data.splice(1, 1)
            }
        }
        if (note.notificationsId !== null) {
            await Notifications.cancelAllScheduledNotificationsAsync(note.notificationsId)
        }
        await AsyncStorage.setItem('notes', JSON.stringify(data));
        navigation.goBack();
    } catch (err) {
        console.log(err);
        Alert.alert(
            'ERROR',
            'There is an error!',
            [
                {
                    text:'OK',
                    style:'cancel'
                }
            ]
        )
    }
  }
}
