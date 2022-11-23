import React, { useState } from 'react';
import ShippingForm from '../../components/forms/ShippingForm';
import PageHeader from '../../components/globals/PageHeader';

function pago() {
  const [step, setStep] = useState(0);
  const [saleData, setSaleData] = useState({});

  return (
    <>
      <PageHeader>Pago</PageHeader>
      <div className='container mx-auto p-4'>
        <ShippingForm />
      </div>
    </>
  );
}

export default pago;
