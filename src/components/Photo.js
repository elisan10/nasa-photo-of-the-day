import React from "react";
import styled from "styled-components";

function Photo({ nasaData }) {
  return (
    <StyledFriend class="photo-container">
      <img src={nasaData.url} alt="nasaPhoto"></img>
      <h2>{nasaData.title}</h2>
      <p>{nasaData.explanation}</p>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-weight: ${(pr) => pr.theme.bold};
`;
export default Photo;
