import { pageExtensions } from "@/next.config";
import styled from "styled-components";

export const PedalPreview = styled.div`
  background-color: antiquewhite;
  width: 70%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 1em;
  margin: 1em;
  word-wrap: break-word;
  border-radius: 5px;
`;

export const TagContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: flex-start;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 5px;
  height: fit-content;
`;

export const Tag = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 2px 0.5em;
  margin: 2px;
  border-radius: 5px;
  background-color: #bfcadb;
`;
