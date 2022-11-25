import create from 'zustand';
import produce from 'immer';

const FORM_INITIAL_STATE = {
  step: 0,
  customer: {
    names: '',
    lastname: '',
    phone: '',
    email: '',
  },
  shipping: {
    street: '',
    num: '',
    intNum: '',
    hood: '',
    state: '',
    city: '',
    zip: '',
    refs: '',
  },
  payment: {
    method: '',
  },
  sale: {},
};

export const usePaymentForm = create((set, get) => ({
  ...FORM_INITIAL_STATE,

  setStep: step =>
    set(
      produce(state => {
        state.step = step;
      })
    ),

  nextStep: () =>
    set(
      produce(state => {
        state.step++;
      })
    ),

  prevStep: () =>
    set(
      produce(state => {
        state.step--;
      })
    ),

  setShippingField: (field, value) => {
    set(
      produce(state => {
        state.shipping[field] = value;
      })
    );
  },

  setCustomerField: (field, value) => {
    set(
      produce(state => {
        state.customer[field] = value;
      })
    );
  },
}));
