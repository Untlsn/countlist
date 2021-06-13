import { useSelector } from 'react-redux';

export const usePointData = (id: string) => {
  const count = useSelector(
    ({ lists }) => lists.points[id].count,
  );
  const name = useSelector(
    ({ lists }) => lists.points[id].name,
  );

  return { count, name };
};