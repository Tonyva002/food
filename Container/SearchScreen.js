import React, {useState} from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../Components/SearchBar";
import UseResults from "../Hooks/UseResults";
import ResultList from "../Components/ResultsList";

const SearchScreen = ({navigation}) => {
    
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = UseResults();
    
    const filterResultsByPrice = (price) => {

        return results.filter(result => {
            return result.price === price;

        });
    };
   
    return(
        <View style={styles.container}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={ () => searchApi(term)}/>
           {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultList 
             navigation = {navigation}
             results={filterResultsByPrice("$$")} 
             title="Cost Effective" />
            <ResultList
             navigation = {navigation}
             results={filterResultsByPrice("$$")}
             title="Bit Pricier"/>
            <ResultList 
             navigation = {navigation}
             results={filterResultsByPrice("$")} 
             title ="Big Spender"/>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1

    }

});

export default SearchScreen;