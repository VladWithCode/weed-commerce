import React from 'react';
import Input from '../../components/forms/Input';
import Button from '../../components/globals/Button';
import PageHeader from '../../components/globals/PageHeader';

function Login() {
  return (
    <>
      <PageHeader>Iniciar Sesion</PageHeader>
      <div className='container mx-auto py-12 grid grid-cols-2'>
        <form className='bg-gray-800 border-2 border-indigo-500 border-opacity-10 rounded col-start-1 p-4 mx-auto'>
          <h2 className='text-2xl pb-4 border-b-2'>Iniciar Sesión</h2>
          <div className='w-80 flex flex-col pt-4 px-3'>
            <Input
              label='Nombre de usuario'
              name='username'
              id='username-input'
            />
            <Input label='Contraseña' name='password' id='password-input' />
            <Button className='mt-4 ml-auto'>Iniciar Sesion</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
