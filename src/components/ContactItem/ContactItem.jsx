import { HIPhoneOutline } from '@icongo/hi/lib/HIPhoneOutline';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const onContactDelete = () => dispatch(fetchDeleteContact(id));

  return (
    <>
      <HIPhoneOutline />
      <span>{name}</span>
      <div>
        <span>{phone} </span>
        <button type="button" onClick={onContactDelete}>
          Delete
        </button>
      </div>
    </>
  );
};