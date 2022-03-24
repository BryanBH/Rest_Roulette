import React, { Component } from "react";
// import { finalCusine } from ''

// const API_KEY = 'q7FDfDleEg2rc96lFKKowIp3SVycRpj6H84nfEkbLHddEZ8UslRolqEP3PNXF0RWMyLifIroQhrQAsaZuHtEMz8Y9l50WqmEx7lifa2eUsNEgQjs8ocvzBbgLMM4YnYx';
// const Fecth = () => {
//   return (
//     <h1></h1>
//   )
// }
class Fecth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
		};
	}

	componentDidMount() {
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx"
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=chinese&location=boston`,
			requestOptions
		)
			.then((response) => response.json())
      .then((result) => { this.setState({results: result}) })
			.catch((error) => console.log("error", error));
  }
  
  renderFecth() {
    let list = []
    this.state.results.map(result => {
      return list.push(`<li>${result.name}</li>`)
    })

    return list
  }

  render() {
    return (
      `<ul>
          ${this.renderFecth()}
      </ul>`
    )
  }
}

export default Fecth;
