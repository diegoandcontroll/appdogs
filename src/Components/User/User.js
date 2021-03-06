import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import Head from '../Helper/Head';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
const User = () => {
  const {data} = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta"/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="post" element={<UserPhotoPost />}/>
        <Route path="statistic" element={<UserStats/>}/>
      </Routes>
    </section>
  )
}

export default User
