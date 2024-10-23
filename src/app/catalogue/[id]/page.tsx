import { Metadata } from 'next';
import { apiClient } from '@/utils/api/apiClient';
import { YachtDetail } from '@/lib/interfaces/yacht.interface';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `Yacht ${id} | Norse Yacht Co`,
  };
}

const YachtPage = async ({ params: { id } }: Props) => {
  const yacht: YachtDetail = await apiClient.getYachtById(`/yachts/${id}`);

  return <h3>{`YachtPage - ${id} - ${yacht.yacht_make}`}</h3>;
};

export default YachtPage;
