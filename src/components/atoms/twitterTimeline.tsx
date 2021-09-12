interface Props {
  userName: string;
}

const TwitterTimeline = (props: Props) => {
  return (
    <a
      className="twitter-timeline"
      href={`https://twitter.com/${props.userName}?ref_src=twsrc%5Etfw`}
    >
      Tweets by {props.userName}
    </a>
  );
};

export default TwitterTimeline;
