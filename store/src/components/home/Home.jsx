import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../Redux/slices/productSlice';
import { addToCart } from '../../Redux/slices/cartSlice';


const Home = () => {
  const products = useSelector((state)=>state.products)
  console.log(products)
  const dispach =useDispatch()
 
useEffect(()=>{



  dispach(fetchProduct())

},[])


  return (
    <Container>

      <Row>
    {
      products.map((product)=>(
        <Col key={product.id}>
        <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                   {product.price}
                    </Card.Text>
                    <Button onClick={()=> dispach(addToCart(product))} variant="primary">addToCart</Button>
                </Card.Body>
        </Card>
    </Col>




      ))
    }
       
     


      </Row>


    
        




    </Container>
  )
}

export default Home