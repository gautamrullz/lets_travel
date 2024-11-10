import React from 'react'
import { View, Text, Image } from 'react-native'

const Card = (props: any) => {
    return (
        <View style={{ width: 100, height: 100, marginHorizontal: 10,justifyContent:'space-between',alignItems:'center'}}>
            <Image
                source={{ uri: props.location.url }}
                style={{ width: 80, height: 80, borderRadius:40 }}
            />
            <Text>{props.location.name}</Text>
        </View>
    )
}

export default Card