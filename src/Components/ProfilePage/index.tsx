import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  EditButton,
  CakeIcon,
  Followage,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Gustavo Alves</h1>
        <h2>@Example</h2>

        <p>Web developer.</p>

        <ul>
          <li>
            <LocationIcon />
            Betim, MG
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de outubro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>777</strong>
          </span>
          <span>
            <strong>7 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
