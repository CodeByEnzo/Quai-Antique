// import React, { Fragment, useState, useEffect, Component } from 'react';
// import axios from 'axios'


// class Test extends Component {
//     state = {
//         products: null
//     }
//     componentDidMount = () => {
//         axios.get(`https://quai-antique.ec-bootstrap.com/front/products`)
//             .then(response => {
//                 // console.log(response)
//                 this.setState({ products: Object.values(response.data) })
//             })
//     }

//     render() {
//         const filteredProducts = this.state.products && this.state.products.filter(product => product.category_id == 1);
//         return (
//             <div className='main-margin'>
//                 <h1 className='text-center'>Test</h1>
//                 <div className='container-fluid'>
//                     {
//                         filteredProducts &&
//                         filteredProducts.map(product => {
//                             return <h3>{product.id} - {product.title} </h3>
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default Test






















// function Test() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 'https://quai-antique.ec-bootstrap.com/front/products',
//             );

//             setData(result.data);
//             console.log(result.data);
//         };
//         fetchData();
//     }, [])

//     return (
//         <Fragment>
//             <div className='test'>
//                 <h1>TEST</h1>
//                 {Object.values(data).map(item => (
//                     <li key={item.id}>
//                         <p> {item.title} </p>
//                         <p> {item.content} </p>
//                         <img className='img-fluid' src={item.product_image}></img>
//                     </li>

//                 ))}
//             </div>

//         </Fragment>
//     )
// }

// export default Test;

