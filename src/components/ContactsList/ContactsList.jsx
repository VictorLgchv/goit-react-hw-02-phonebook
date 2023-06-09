import { Ul, Li } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ onFilterName, deleteItem }) => {
  return (
    <Ul>
      {onFilterName.map(({ id, name, number }) => (
        <Li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteItem(id)}>
            delete
          </button>
        </Li>
      ))}
    </Ul>
  );
};

ContactsList.propTypes = {
  onFilterName: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
