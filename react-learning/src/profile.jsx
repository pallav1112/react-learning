import Avatar from './avatar';

function ProfileDetails({ details }) {
  return (
    <>
      <ul>
        <li>
          <b>Profession: </b>
          {details.profession}
        </li>
        <li>
          <b>Awards: {details.awards.count} </b>({details.awards.details})
        </li>
        <li>
          <b>Discovered: </b>
          {details.discovered}
        </li>
      </ul>
    </>
  );
}

export default function Profile({ person, size, details }) {
  return (
    <>
      <section className="profile">
        <h2>{person.name}</h2>
        <Avatar person={person} size={size} />
        <ProfileDetails details={details} />
      </section>
    </>
  );
}
