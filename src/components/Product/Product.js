import React,{useEffect,useState} from 'react'
// import ProductCard from './ProductCard'
import { useDispatch,useSelector } from 'react-redux'
import { productAll } from '../../redux/features/product/productActions';
import Spinner from '../Helper/Spinner';
import Loading from '../Helper/Loading';
import Header from '../Header/Header';
const ProductCard = React.lazy(() => import('./ProductCard'));

const Product = () => {
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.product)
  
  useEffect(()=>{
    dispatch(productAll())
  },[data,dispatch])


  return (
    <section className='product mb-10'>
    <Header head="All Types of Products"
     title="MASTER FURRIER MANNY HERNANDEZ"
     description="Naturally made Luxuries of the Finest Craftsmanship. In-style Outerwear that keeps you warm. Women's & Men's Collections."
      />
    <div className='flex gap-2 justify-evenly flex-wrap'>
    {
      loading ? (
        <Loading />
      ):(
        products.map((item,i)=>{
          return(
            <React.Suspense fallback={<Loading />}>
            <ProductCard item={item} />
         </React.Suspense>
          )
        })
      )
    
    }

  

    </div>
</section>
  )
}

export default Product