import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333"
    },
    header: {
        padding: 15

    },
    news: {
        alignSelf: 'center',

    },
    image: {
        height: 200,
        width: 300
    },
    gradient: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 15

    },
    title: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 20,
        color: 'white'
    },
    share: {
        fontSize: 18,
        color: '#fff',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 5,
       

    }

})

export default styles;