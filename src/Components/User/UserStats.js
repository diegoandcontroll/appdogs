import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Components/Helper/Loading';
import Error from '../../Components/Helper/Error';
import { GET_STATS } from '../../api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));
const UserStats = () => {
  const {data, error, loading, request} = useFetch();
  React.useEffect(() => {
    async function getData(){
      const {url, options} = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request])
  if(loading) return <Loading />
  if(error) return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas"/>
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  )
  else return null;
}

export default UserStats
