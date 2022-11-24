import { useReducer } from 'react';

const reducer = (state, action) => {
  const { type, payload } = action;

  const handlers = {
    setField: () => {
      return { fields: { ...state.fields, [payload.field]: payload.value } };
    },
  };

  if (typeof handlers[type] !== 'function') return state;

  return handlers[type]();
};

const useForm = (initFields = {}) => {
  const [state, dispatch] = useReducer(reducer, { fields: initFields });

  const setField = (field, value) =>
    dispatch({ type: 'setField', payload: { field, value } });

  const onInputChange = e => {
    const { target } = e;

    setField(target.name, target.value);
  };

  let result = [state.fields, onInputChange, setField];

  result.fields = state.fields;
  result.onInputChange = state.onInputChange;
  result.setField = state.setField;

  return result;
};

export default useForm;
