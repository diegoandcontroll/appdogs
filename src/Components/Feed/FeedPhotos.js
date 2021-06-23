import React from 'react'
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../api';
import styles from './FeedPhotos.module.css';
const FeedPhotos = ({page,user, setModalPhoto, setInfinite}) => {
  const {data, error, loading, request} = useFetch();
  React.useEffect(() => {
    async function fetchPhoto(){
      let total = 3;
      const {url, options} = PHOTOS_GET({page,total, user});
      const {response,json} = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false);  
    }
    fetchPhoto();
  },[request, user, page, setInfinite]);
  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => <FeedPhotoItem 
      key={photo.id} 
      photo={photo}
      setModalPhoto={setModalPhoto}
      />)}
    </ul>
  )
  else return null;
}

export default FeedPhotos
