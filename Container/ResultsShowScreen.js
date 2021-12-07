import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import Yelp from "../Api/Yelp";

const ResultsShowScreen = (props) => {
  const [result, setResult] = useState(null);
  const id = props.route.params.id;
 
  
  const getResult = async (id) =>{
      const response = await Yelp.get(`/${id}`);
      setResult(response.data);

  };

  useEffect(() => {
      getResult(id);
  }, []);

  if (! result){
      return null;
  }

    return(
        <View>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
            data={result.photos} 
            keyExtractor={(photo) => photo} 
            renderItem={({item}) => {
                return <Image style={styles.image} source ={{uri: item}} />


            }}/>
        </View>
    );
};

const styles = StyleSheet.create({

    image: {
        height: 200,
        width: 300,
        marginTop: 10,
        marginStart: 5
        

    },
    textStyle: {
        color: "#000000",
        marginStart: 5
    }

});

export default ResultsShowScreen;