import { getImageUrl } from './utils.js';

// eslint-disable-next-line react/prop-types
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
    //   eslint-disable-next-line react/prop-types
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
