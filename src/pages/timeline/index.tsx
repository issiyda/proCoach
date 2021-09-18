import TwitterTimeline from '@/components/atoms/twitterTimeline';
import { TwitterUser, Image } from '@/types/firebase';
import { getFireStoreData, getStorageData } from '@/utils/firebase';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Timeline = () => {
  const initialState: Image[] = [];

  const [images, setImages] = useState(initialState);
  const [storage, setStorage] = useState('');
  useEffect(() => {
    const getImageData = async () => {
      const images: Image[] = [];
      (await getFireStoreData('image')).forEach((doc: any) => {
        images.push(doc.data());
      });
      return setImages(images);
    };
    getImageData();
    const getStorage = async () => {
      const storage = await getStorageData('gs://procoarch.appspot.com');
      console.log('storage', storage);
      return setStorage(storage);
    };
    getStorage();
  }, []);

  return (
    images.length > 0 && (
      <TimelineContainer>
        <TimelineRow>
          {images.map((image, index) => {
            return (
              <ImageContainer key={index}>
                <p>{image.name}</p>
                <img src={storage}></img>
              </ImageContainer>
            );
          })}
        </TimelineRow>
      </TimelineContainer>
    )
  );
};

const TimelineContainer = styled.div`
  padding: 16px;
`;

const TimelineRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  padding: 16px;
  width: 400px;
`;

export default Timeline;
