import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../globals/Button';
import Input from './Input';

function ShippingForm({ onSubmit, props }) {
  const [fields, onInputChange] = useForm({
    street: '',
    num: '',
    intNum: '',
    hood: '',
    state: '',
    city: '',
    zip: '',
    refs: '',
  });

  const _onSubmit = e => {
    e.preventDefault();

    onSubmit(fields);
  };

  return (
    <>
      <p className='text-xl'>Direccion de envio</p>
      <form className='py-6' onSubmit={_onSubmit} {...props}>
        <div className='flex mb-4'>
          <Input
            label='Calle'
            id='street'
            name='street'
            className='w-4/6 px-1'
            onChange={onInputChange}
            value={fields['street']}
          />
          <Input
            id='num'
            name='num'
            label='Numero'
            className='w-2/6 px-1'
            onChange={onInputChange}
            value={fields['num']}
          />
        </div>
        <div className='flex mb-4'>
          <Input
            label='Colonia'
            id='hood'
            name='hood'
            className='px-1 w-full'
            onChange={onInputChange}
            value={fields['hood']}
          />
        </div>
        <div className='flex mb-4'>
          <Input
            label='Ciudad'
            id='city'
            name='city'
            className='px-1 w-1/2'
            onChange={onInputChange}
            value={fields['city']}
          />
          <Input
            label='Estado'
            id='state'
            name='state'
            className='px-1 w-1/2'
            onChange={onInputChange}
            value={fields['state']}
          />
        </div>
        <div className='flex mb-4'>
          <Input
            label='Codigo Postal'
            id='zip'
            name='zip'
            className='px-1 w-full'
            onChange={onInputChange}
            value={fields['zip']}
          />
        </div>
        <div className='flex mb-4'>
          <Input
            label='Referencias'
            id='refs'
            name='refs'
            className='px-1 w-full'
            onChange={onInputChange}
            value={fields['refs']}
          />
        </div>
        <div className='flex'>
          <Button type='submit' className='w-full'>
            Siguiente
          </Button>
        </div>
      </form>
    </>
  );
}

export default ShippingForm;
