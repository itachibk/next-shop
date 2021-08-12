import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import vali from '../utils/validate';

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = vali(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('auth/register', userData);

    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
  };

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ConfirmPassword</label>
          <input type="password" className="form-control" id="cf_password" name="cf_password" value={cf_password} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Register
        </button>
        <p className="my-2">
          Already have an account?
          <Link href="/signin">
            <a style={{ color: 'crimson' }}>Login</a>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
