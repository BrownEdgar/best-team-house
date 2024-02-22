import './Email.scss'
import FormButton from '../FormButton/FormButton'
import { useDispatch, useSelector } from 'react-redux'
import { addUserEmail } from '../../features/email/emailSlice';
export default function Email() {
  const email = useSelector(state => state.email);
  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();
    const { email } = e.target
    dispatch(addUserEmail({ email: email.value }))
    e.target.reset();
  }

  return (
    <div className="container">
      <div className='Email'>
        <h2>{email.title}</h2>
        <p>{email.description}</p>
        <form onSubmit={addUser}>
          <input type="email" name="email" placeholder='Enter your email... ' />
          <FormButton text={"Continue"} />
        </form>
      </div>
    </div>
  )
}
