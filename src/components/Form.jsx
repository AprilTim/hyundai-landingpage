import React, {useEffect} from 'react';

function Form() {

  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    location: 'Location',
  });

  const [isValid, setValid] = React.useState(false);
  const [isSubmit, setSubmit] = React.useState(false);

  useEffect( () => {
    const isValid = !!(form.firstName
      && form.lastName
      && form.email
      && form.mobile
      && (form.location !== 'Location'));
    setValid(isValid);
  },[form]);

  const onSubmit = event => {
    event.preventDefault();
    setForm({
      ...form,
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      location: 'Location',
    });
    setSubmit(true);
    setTimeout(setSubmit, 2500,false);
  };

  return (
    <div className="form">
      <div className="container">
        <form onSubmit={event =>  onSubmit(event)} className="form__block">
          <input onChange={ e => setForm({...form,firstName: e.currentTarget.value})} value={form.firstName} className="form__block__item" placeholder={'First name'} />
          <input onChange={ e => setForm({...form,lastName: e.currentTarget.value})} value={form.lastName} className="form__block__item" placeholder={'Last name'} />
          <input onChange={ e => setForm({...form,email: e.currentTarget.value})} value={form.email} className="form__block__item" placeholder={'Email name'} />
          <input onChange={ e => setForm({...form,mobile: e.currentTarget.value})} value={form.mobile} className="form__block__item" placeholder={'Mobile name'} />
          <select
            className="form__block__item select"
            onChange={ e => setForm({...form,location: e.currentTarget.value})}
            value={form.location}
          >
            <option hidden>Location</option>
            <option>Moscow</option>
            <option>Saint Petersburg</option>
          </select>
          {isSubmit
            ? <div className="button form__submit">Thank you!</div>
            :<button disabled={!isValid} type="submit" className="button button__white">
              Request
            </button>}
        </form>
      </div>
    </div>
  );
}

export default Form;
