import Profile from './profile';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }}
        size={70}
        details={{
          profession: 'physicist and chemist',
          awards: {
            count: 4,
            details:
              'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
          },
          discovered: 'polonium (chemical element)',
        }}
      />
      <Profile
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={70}
        details={{
          profession: 'geochemist',
          awards: {
            count: 2,
            details: 'Miyake Prize for geochemistry, Tanaka Prize',
          },
          discovered: 'a method for measuring carbon dioxide in seawater',
        }}
      />
    </div>
  );
}
