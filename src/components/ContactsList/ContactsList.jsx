import {Ul, Li} from './Contacts.styled'


export const ContactsList = ({ onFilterName, deleteItem }) => {
  return (
    <Ul>
      {onFilterName.map(({ id, name, number }) => (
        <Li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteItem(id)}>delete</button>
        </Li>
      ))}
    </Ul>
  );
};
