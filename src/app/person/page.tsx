import PersonInfo from '@/components/person-info';
import { Person } from '@/interfaces';

export default async function PersonPage() {
  const res = await fetch(`http://localhost:3000/api/people/`);
  let jsonPromise = res.json();
  let json = await jsonPromise;
  return (
    <ul>
      {json.map((p: Person) => (
        <PersonInfo person={p} key={p.id} />
      ))}
    </ul>
  );
}
