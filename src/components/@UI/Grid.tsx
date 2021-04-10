import { MQ_DESKTOP, MQ_MOBILE } from "@/constants/MediaQueries";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${MQ_MOBILE} {
    grid-template-columns: 1fr;
  }
  @media ${MQ_DESKTOP} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  a {
    font-weight: normal;
  }
  a:hover {
    text-decoration: none;
  }
`;
