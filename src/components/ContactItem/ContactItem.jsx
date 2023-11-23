import { HIPhoneOutline } from '@icongo/hi/lib/HIPhoneOutline';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { fetchDeleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onContactDelete = () => dispatch(fetchDeleteContact(id));

  return (
    <>
      <HIPhoneOutline />
      <span>{name}</span>
      <div>
        <span>{number} </span>
        <button type="button" onClick={onContactDelete}>
          Delete
        </button>
      </div>
    </>
  );
};