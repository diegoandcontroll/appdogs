import React from 'react'
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTOS_GET } from '../../api';
import styles from './FeedPhotos.module.css';
const FeedPhotos = ({setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();
  React.useEffect(() => {
    async function fetchPhoto(){
      const {url, options} = PHOTOS_GET({page: 1, total: 5, user: 0});
      const {json} = await request(url, options);
      console.log(json);
    }
    fetchPhoto();
  },[request]);
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