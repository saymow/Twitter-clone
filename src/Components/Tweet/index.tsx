import React from "react";

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>28 de out</time>
          </Header>

          <Description>Foguete não tem ré &#128640;</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              65
            </Status>
            <Status>
              <RetweetIcon />
              15
            </Status>
            <Status>
              <LikeIcon />
              777
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
