import { Image } from '@/types/firebase';
import { getFireStoreData, getStorageData } from '@/utils/firebase';
import styled from '@emotion/styled';

export async function getStaticProps() {
  const images: Image[] = [];
  (await getFireStoreData('image')).forEach((doc: any) => {
    images.push(doc.data());
  });

  const storage = await getStorageData('gs://procoarch.appspot.com');
  return { props: { images, storage }, revalidate: 20 };
}

interface Props {
  images: Image[];
  storage: string;
}

const Timeline = (props: Props) => {
  return (
    props.images.length > 0 && (
      <TimelineContainer>
        <TimelineRow>
          {props.images.map((image, index) => {
            return (
              <ImageContainer key={index}>
                <p>{image.name}</p>
                <img src={props.storage}></img>
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
  justify-content: center;
`;

const ImageContainer = styled.div`
  padding: 16px;
  width: 400px;
`;

export default Timeline;
