import React,{useEffect,useState} from 'react'
// import ProductCard from './ProductCard'
import { useDispatch,useSelector } from 'react-redux'
import { productAll } from '../../redux/features/product/productActions';
import Spinner from '../Helper/Spinner';
import Loading from '../Helper/Loading';
const ProductCard = React.lazy(() => import('./ProductCard'));

const Product = () => {
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.product)
  
  useEffect(()=>{
    dispatch(productAll())
  },[data,dispatch])


  return (
    <section className='product scroll-smooth h-[100vh]'>
    <div className='flex gap-4 mt-5 justify-evenly flex-wrap'>
    {
      loading ? (
        <Spinner />
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