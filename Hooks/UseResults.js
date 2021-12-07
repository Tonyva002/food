import { useEffect, useState } from "react";
import Yelp from "../Api/Yelp";


export default () => {

    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMesage] = useState("");

    const searchApi = async (searchTerm) => {
        try{
            const response = await Yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });
            setResult(response.data.businesses);
    } catch (e){
        setErrorMesage("Something went wrong");

    }
    };
   
   useEffect(() => {
       searchApi("pasta");
   }, []);
   
   return [searchApi, results, errorMessage];
};