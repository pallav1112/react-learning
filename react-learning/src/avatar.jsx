import { getImageUrl } from './utils';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size > 90 ? 'b' : 's')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
