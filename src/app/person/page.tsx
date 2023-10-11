import PersonInfo from '@/components/person-info';
import { peopleList } from '@/utils/data';

export default function PersonPage() {
  return (
    <ul>
      {peopleList.map((p) => (
        <PersonInfo person={p} key={p.id} />
      ))}
    </ul>
  );
}
