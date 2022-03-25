import React, { useEffect, useState } from "react";
import axios from "axios";
import { finalCusine } from "../../pages/Roulette";

const ApiResult = () => {
	const [businesses, setBusinesses] = useState();
	// const variables = {
	//     category: finalCusine,
	//     location: 'boston'
	// }
	useEffect(() => {
		// axios.post("/sendVariables", variables)
		//     .then(res => {
		//     console.log(res)
		// })

        // call to local server 
		axios.get("/getYelpAPI").then((response) => {
			const responseBusinesses = response.data.object;
            setBusinesses(responseBusinesses);
            // console.log(businesses)
		});
	},[]);

	return (
		<>
            <h1> API call results</h1>
            {/* checks if business variable is not undefined, if it isn't then map and display the name and rating */}
            {businesses && businesses.map((business => {
                const { name, rating } = business;
                return (
                    <>
                        <h3>Business name: {name}, Rating: {rating}</h3>
                    </>
                )
            }))}
		</>
	);
};

export default ApiResult;
