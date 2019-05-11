import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, ImageBackground, Dimensions } from 'react-native';

const { width, heigth } = Dimensions.get('screen');

const mocks = [
    {
        id: 1,
        user: {
            name: 'Pankaj Tanwar',
            avatar: ''
        },
        location: 'Wallis and Futura',
        temperature: 34,
        title: 'Greece 1',
        description: 'Greece Description',
        rating: 4.7,
        reviews: 3123,
        preview: 'https://images.unsplash.com/photo-1526541157922-a2f309434a00?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1526541157922-a2f309434a00?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1526541157922-a2f309434a00?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1526541157922-a2f309434a00?auto=format&fit=crop&w=375&q=80',
            'https://images.unsplash.com/photo-1526541157922-a2f309434a00?auto=format&fit=crop&w=375&q=80'
            ]
    }
]


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    column :{
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 36,
        paddingTop: 48,
        paddingBottom: 24
    },
    articles: {
        // paddingHorizontal: 36,
    },
    destinations: {
        //paddingHorizontal: 36
    },
    destination: {
        width: width - (36 * 2),
        marginHorizontal: 36,
        padding: 36,
        borderRadius: 12,
        backgroundColor: 'pink'
    },
    recommended: {
        padding: 36
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    }

});

class Articles extends React.Component {
    static navigationOptions = {
        header: (
            <View style={
                [
                    styles.flex, styles.row, styles.header,
                    {
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                ]}
            >
                <View>
                    <Text>
                        Search for place
                    </Text>
                    <Text style={{fontSize: 24}}>Destination</Text>
                </View>
                <View>
                    <Text>
                        Avatar
                    </Text>
                </View>
            </View>
        )
    }

    renderDestinations = () => {
        return (
            <View style={[styles.flex, styles.column, styles.destinations]}>
                <FlatList
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    data={this.props.destinations}
                    keyExtractor= {( item, index) => `${item.id}`}
                    renderItem={({ item }) => this.renderDestination(item)}
                />

            </View>
        )
    }

    renderDestination = item => {
        return (
            <ImageBackground
                style={[styles.flex, styles.destination]}
                source={ {uri: item.preview}}
            >
                <View style={[ styles.flex,styles.row]}>
                    <View>
                        <Image source={{ uri: item.user.avatar}} style={ styles.avatar}/>
                    </View>
                    <View style={[ styles.flex, styles.column]}>
                        <Text>{item.user.name}</Text>
                        <Text>{item.location}</Text>
                    </View>
                    <View>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    renderRecommended = () => {
        return (
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <Text>Recommended</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={[styles.flex, styles.articles ]}>
                {this.renderDestinations()}
                {this.renderRecommended()}
            </View>
        );
    }
}

Articles.defaultProps = {
    destinations: mocks
};

export default Articles;
