import React from 'react';
import ReviewOrder from '../../components/Checkout/ReviewOrder';
import ShippingForm from '../../components/forms/ShippingForm';
import PageHeader from '../../components/globals/PageHeader';
import { usePaymentForm } from '../../hooks/usePaymentForm';
import shallow from 'zustand/shallow';
import Button from '../../components/globals/Button';
import SelectMethod from '../../components/Checkout/SelectMethod';
import Script from 'next/script';
import CustomerInfo from '../../components/Checkout/CustomerInfo';

function Pago() {
  const step = usePaymentForm(state => state.step);
  const { nextStep, prevStep } = usePaymentForm(
    state => ({ nextStep: state.nextStep, prevStep: state.prevStep }),
    shallow
  );

  return (
    <>
      <Script src='https://sdk.mercadopago.com/js/v2' />
      <PageHeader>Pago</PageHeader>
      <div className='container mx-auto p-4'>
        {step === 0 && <CustomerInfo />}
        {step === 1 && <ShippingForm />}
        {step === 2 && <ReviewOrder />}
        {step === 3 && <SelectMethod />}
        {step === 4 && <p>Confirmar Orden</p>}
        <div className='flex gap-x-4 py-2 md:w-1/2 md:ml-auto lg:w-1/3'>
          {step !== 0 && (
            <Button className='basis-1/2 grow' onClick={e => prevStep()}>
              Regresar
            </Button>
          )}
          {step !== 4 && (
            <Button className='basis-1/2 grow' onClick={e => nextStep()}>
              {step === 3 ? 'Confirmar' : 'Siguiente'}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Pago;
