import React from 'react';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import Input from './Input';
import shallow from 'zustand/shallow';

function ShippingForm({ props }) {
  const { fields, setShippingField, nextStep } = usePaymentForm(
    state => ({
      fields: state.shipping,
      setShippingField: state.setShippingField,
      nextStep: state.nextStep,
    }),
    shallow
  );

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setShippingField(name, value);
  };

  return (
    <>
      <p className='text-lg'>Direccion de envio</p>
      <form
        className='py-6'
        onSubmit={e => {
          e.preventDefault();
          nextStep();
        }}
        {...props}>
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
      </form>
    </>
  );
}

export default ShippingForm;
