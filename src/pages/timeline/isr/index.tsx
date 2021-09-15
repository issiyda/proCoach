import TwitterTimeline from '@/components/atoms/twitterTimeline';
import { TwitterUser } from '@/types/firebase';
import { getTwitterUser } from '@/utils/firebase';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';

let isLoad = false;

export async function getStaticProps() {
  const twitterUsers: TwitterUser[] = [];
  (await getTwitterUser()).forEach((doc: any) => {
    twitterUsers.push(doc.data());
  });
  console.log(twitterUsers);

  return {
    props: {
      twitterUsers,
    },
    revalidate: 60,
  };
}

interface Props {
  twitterUsers: TwitterUser[];
}

const Timeline = (props: Props) => {
  console.log('props', props);

  useEffect(() => {
    if (!isLoad) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(script);
      isLoad = true;
    }
  }, []);

  return (
    props.twitterUsers.length > 0 && (
      <TimelineContainer>
        <TimelineRow>
          {props.twitterUsers.map((user) => {
            return (
              <TwitterTimelineContainer key={user.twitterId}>
                <p>{user.name}</p>
                <TwitterTimeline userName={user.twitterId}></TwitterTimeline>
              </TwitterTimelineContainer>
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
`;

const TwitterTimelineContainer = styled.div`
  padding: 16px;
`;

export default Timeline;
