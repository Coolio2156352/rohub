import React from "react";
import styled from "styled-components";

export default function ProjectBox(props) {
  return (
    <Wrapper>
      <ImgBtn className="aniamate pointer " data-modal-toggle={props.data_modal}>
        <img className="radius8" src={props.img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{props.title}</h3>
      <p className="font13">{props.text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  height: 309px;
  width:376px;
  border:2px solid #7620ff;
  border-radius:5%;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;