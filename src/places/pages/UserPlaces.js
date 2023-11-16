import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlaceList from '../components/PlaceList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import HttpHook from '../../shared/hooks/http-hook';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];


const UserPlaces = () => {
  const [places, setPlaces] = useState();
  const {isLoading, error, sendRequest, clearError} = HttpHook();
  
  useEffect(() =>{
      const getPlaces = async() => {
      try{
        const responseData = await sendRequest("http://localhost:5000/api/places/user/" + userId);
        setPlaces(responseData.places);
      }
      catch(err){}
    };
    getPlaces();  
  },[]);

  const userId = useParams().userId;
  return(
  <>
  <ErrorModal error = {error} onClear = {clearError}/>
    {isLoading && 
    <div className="center">
      <LoadingSpinner></LoadingSpinner>
      </div>
    }
    {!isLoading && places && <PlaceList items={places} />}
  </>);
}

export default UserPlaces;
