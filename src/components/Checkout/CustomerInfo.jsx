import React from 'react';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import Input from '../forms/Input';

function CustomerInfo(props) {
  const fields = usePaymentForm(state => state.customer);
  const setCustomerField = usePaymentForm(state => state.setCustomerField);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setCustomerField(name, value);
  };

  return (
    <>
      <p className='text-lg'>Informacion de contacto</p>
      <form className='py-6' onSubmit={e => e.preventDefault()} {...props}>
        <div className='flex gap-x-2 mb-4'>
          <Input
            label='Nombre(s)'
            id='names'
            name='names'
            className='w-1/2 px-1'
            onChange={onInputChange}
            value={fields['names']}
          />
          <Input
            label='Apellidos'
            id='lastname'
            name='lastname'
            className='w-1/2 px-1'
            onChange={onInputChange}
            value={fields['lastname']}
          />
        </div>
        <div className='flex mb-4'>
          <Input
            label='Telefono'
            id='phone'
            name='phone'
            type='phone'
            className='px-1 w-full'
            onChange={onInputChange}
            value={fields['phone']}
          />
        </div>
        <div className='flex'>
          <Input
            label='Correo Electronico'
            id='email'
            name='email'
            type='email'
            className='px-1 w-full'
            onChange={onInputChange}
            value={fields['email']}
          />
        </div>
      </form>
    </>
  );
}

export default CustomerInfo;
