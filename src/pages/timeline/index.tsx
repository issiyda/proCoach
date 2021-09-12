import TwitterTimeline from '@/components/atoms/twitterTimeline';
import { TwitterUser } from '@/types/firebase';
import { getTwitterUser } from '@/utils/firebase';
import styled from '@emotion/styled';
import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

let isLoadWidgets = false;

const Timeline = () => {
  const props = {
    userName: 'issiyrun',
  };

  const initialState: TwitterUser[] = [];

  const [users, setUsers] = useState(initialState);
  useEffect(() => {
    if (!isLoadWidgets) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(script);
      isLoadWidgets = true;
    }
    const getTwitterData = async () => {
      const twitterUsers: TwitterUser[] = [];
      (await getTwitterUser()).forEach((doc: any) => {
        twitterUsers.push(doc.data());
      });
      return setUsers(twitterUsers);
    };
    getTwitterData();
    console.log(users);
  }, []);
  return (
    users.length > 0 && (
      <TimelineContainer>
        <TimelineRow>
          {users.map((user) => {
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
