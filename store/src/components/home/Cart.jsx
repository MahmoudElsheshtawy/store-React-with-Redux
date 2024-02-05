import { Button, Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { DletFromCart, clear } from "../../Redux/slices/cartSlice"


const Cart = () => {
  const cart =useSelector((state)=>state.cart)
const dispatch =useDispatch()
  console.log(cart);
  const totalPrice = cart.reduce((acc,item)=>{
    acc+= item.price * item.quantity;
    return acc
  },0)
  return (
    <Container style={{paddingTop:'5rem'}}>
      <h1 >wilcome to cart</h1>





    <Button onClick={()=>dispatch(clear())}>Clear My Cart</Button>

    <h3>Total_Price:{totalPrice.toFixed(2)}$</h3>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Title</th>
          <th>Product</th>
          <th>quantity</th>
         <th>Price</th>
        </tr>
      </thead>
      <tbody>
       {
         cart.map((item)=>(
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img style={{width:'100px',height:"120px"}}  src={item.image}/></td>
          <td>{item.quantity}</td>
          <td>{item.price}$</td>
          <td><Button onClick={()=>dispatch(DletFromCart(item))} variant="danger">Delete</Button></td>
        </tr>



        )) 
       } 
      
      </tbody>
    </Table>














     

    </Container>
  )
}

export default Cart