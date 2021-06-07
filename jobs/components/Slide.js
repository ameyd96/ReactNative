import React, {Component } from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH=Dimensions.get('window').width;

class Slide extends Component{

    renderLastSlide(index){
        if(index===this.props.data.length -1){
            return(
                <Button 
                title="i am ready !"
                raised 
                buttonStyle={styles.ButtonStyle}   //for giving styling to button use buttonStyle property
                onPress={this.props.onComplete}/>
            );
        }
    }
  
    renderSlides(){
       return this.props.data.map( (slide, index)=>{

       return(
        <View key={slide.text} style={[styles.SlideStyle,{backgroundColor:slide.color}]}>
        <Text style={styles.TextStyle}>{slide.text}</Text>
        {this.renderLastSlide(index)}
        </View>
       );
       }); 
    }

    render() {
        return(
            <ScrollView 
            horizontal
            style={{flex:1}}
            pagingEnabled>

            {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles={
    SlideStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:SCREEN_WIDTH
    },
    TextStyle:{
        fontSize:30,
        color:'white'
    },
    ButtonStyle:{

        backgroundColor:'#0288D1',
        marginTop:15
    }
};

export default Slide;




// import React, {Component} from 'react';
// import {View,Text,ScrollView,Dimensions} from 'react-native';
// import {Button} from 'react-native-elements';

// const SCREEN_WIDTH=Dimensions.get('window').width;
// class Slide extends Component {
//     renderLastSlide(index){
//         if(index === this.props.data.length -1){
//             return (
//                 <Button title="Onwards!"
//                 raised
//                 />
//             )

//         }
//     }
//     renderSlides(){
//         return this.props.data.map((slide,index) => {
//             return(
//                 <View key={slide.text} 
//                 style={[styles.slideStyle,{backgroundColor:slide.color}]}
//                 >
//                     <Text style={styles.slideText}>{slide.text}</Text>
//                     {this.renderLastSlide(index)}
//                 </View>
//             )

//         })
//     }
//     render() {
//         return (
//             <ScrollView
//                horizontal
//                style={{flex:1}}
//                pagingEnabled
//                >
//                    {this.renderSlides()}

//                </ScrollView>
            
//         )
//     }
// }

// const styles={
//     slideStyle:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         width:SCREEN_WIDTH

//     },
//     slideText:{
//         fontSize:30,
//         color:'white'
//     }
// }

// export default Slide;