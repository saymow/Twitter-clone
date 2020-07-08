import React from "react";
import StickyBox from "react-sticky-box";

import FollowSuggestion from "../FollowSuggestion";
import List from "../List";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="example 1" nickname="@example1" />,
              <FollowSuggestion name="example 2" nickname="@example2" />,
              <FollowSuggestion name="example 3" nickname="@example3" />,
            ]}
          />

          <List title="Talvez você curta" elements={[<News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
