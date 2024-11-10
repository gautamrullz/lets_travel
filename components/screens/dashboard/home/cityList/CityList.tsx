import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { theme } from '../../../../../core/theme'

const CityList = ({ cities }) => {
    return (
        <FlatList
            data={cities}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View key={item.id} style={{height:'auto', flexDirection:'row', margin: 15, padding:10, backgroundColor:theme.colors.cardBackground, borderRadius:25 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={{ uri: item.url }}
                            style={{ width: 80, height: 80, borderRadius: 40 }}
                        />
                    </View>
                    <View style={{ flex: 1, padding: 20 }}>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                        <View>
                            <Text>{item.name}</Text>
                        </View>

                    </View>
                </View>
            )}
        />

    )
}

export default CityList