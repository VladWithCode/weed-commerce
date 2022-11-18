import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Button from '../../../components/globals/Button';
import Loading from '../../../components/globals/Loading';
import Carousel from '../../../components/Product/Carousel';
import { useCart } from '../../../hooks/useCart';
import { useToast } from '../../../hooks/useToast';
import { fetchProductBySlug } from '../../../utils/fetchers/products';
import { priceToString } from '../../../utils/numberToString';

function Producto({}) {
  const addItem = useCart(state => state.addItem);
  const displayToast = useToast(state => state.displayToast);
  const { slug } = useRouter().query;
  const { data, isLoading, isError } = useQuery(
    ['fetch-single-product', slug],
    () => fetchProductBySlug(slug)
  );

  const onAddToCartClick = () => {
    addItem(data.product);
    displayToast('Producto añadido al carrito');
  };

  if (isLoading || !data?.product)
    return (
      <div className='pt-24'>
        <Loading />
      </div>
    );

  return (
    <div className='container mx-auto mt-2 p-4 pt-20'>
      <Link href={`/tienda/${data.product.category}`}>
        <a className='pt-1 pb-4 text-gray-500 hover:text-white cursor-pointer text-base inline-flex items-center'>
          <svg className='w-5 h-5 fill-current rotate-180'>
            <use href='/svg/sprites.svg#angle'></use>
          </svg>
          {data.product.category}
        </a>
      </Link>
      <div className='p-4 border-2 bg-gray-800 border-indigo-500 border-opacity-20 rounded-sm grid grid-cols-1 lg:grid-cols-2'>
        <div className='col-start-1 overflow-hidden'>
          <Carousel
            assetPath={data.product.assetPath}
            images={data.product.pics}
          />
        </div>
        <div className='lg:col-start-2 px-4 self-center'>
          <h1 className='text-3xl pt-2'>{data.product.name}</h1>
          <p className='text-xs text-gray-400 mb-4'>{data.product.category}</p>
          <p className='pb-2 text-xl'>
            ${priceToString(data.product.price)}
            {data.product.unit ? '/' + data.product.unit : ''}
          </p>
          <p className='text-gray-400 text-sm w-5/6 flex flex-col pb-4'>
            <span className='w-full grow overflow-hidden text-ellipsis whitespace-nowrap'>
              {data.product.description}
            </span>
            <span className='text-indigo-400 grow-0 pt-1 hover:underline underline-offset-1 cursor-pointer'>
              Ver más...
            </span>
          </p>
          <div className='flex gap-x-2 leading-6'>
            <p className='text-gray-300'>Cantidad:</p>
            <select
              name='qty'
              id='qty'
              className='font-semibold rounded-sm px-2 bg-slate-700'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='otra'>Otra</option>
            </select>
            <p className='text-xs font-light text-gray-400 leading-6'>
              ({data.product.stock} disponibles)
            </p>
          </div>
          <div className='flex flex-col gap-y-4 xl:w-1/3 py-4'>
            <Button className='px-4' onClick={onAddToCartClick}>
              Agregar al carrito
            </Button>
            {/* <Button className='px-4'>Comprar ahora</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
