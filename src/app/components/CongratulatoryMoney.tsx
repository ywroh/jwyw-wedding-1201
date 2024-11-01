import { CheckCircleTwoTone } from "@ant-design/icons";
import { Button, Divider, Modal, message } from "antd";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 100px 0px;
  background: #efebe9;
  width: 100%;
  text-align: center;
    border-bottom: 1px solid lightgray;
    background: rgba(255, 182, 193, 0.2);
`;

const Description = styled.p`
    font-size: 1.3vh;
    line-height: 1.75;
    opacity: 0.65;
`;

const ContactButton = styled.div`
  display: inline-block;
  text-align: center;
    cursor: pointer;
`;

export default function CongratulatoryMoney() {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
      <Wrapper>
          <Divider plain style={{marginTop: 0, marginBottom: 32}}>
              <div style={{margin: "0 auto"}}>
                  <h1 className="text-3xl font-bold text-2xl leading-tight">축하의 마음을 전하세요</h1>
              </div>
              </Divider>
          <div>축하의 마음을 담아 축의금을 전달해 보세요.</div>
          <div style={{margin: "20px 0px", display: 'flex', justifyContent: 'center', gap: "50px"}}>
              <ContactButton onClick={() => setGroomVisible(true)}>
                  <CheckCircleTwoTone
                      style={{fontSize: 64, marginBottom: 16}}
                      twoToneColor="#829fe0"
                  />
                  <br/>
                  <div>신랑측 계좌번호 확인</div>
              </ContactButton>
              <ContactButton onClick={() => setBrideVisible(true)}>
                  <CheckCircleTwoTone
                      style={{fontSize: 64, marginBottom: 16}}
                      twoToneColor="#fe7daf"
                  />
                  <br/>
                  <div>신부측 계좌번호 확인</div>
              </ContactButton>
          </div>
          <Modal
              title={<b>신랑측 계좌번호</b>}
              open={groomVisible}
              onOk={() => setGroomVisible(false)}
              onCancel={() => setGroomVisible(false)}
              cancelButtonProps={{style: {display: "none"}}}
              okButtonProps={{style: {display: "none"}}}
              footer={null}
          >
              <div>
                  <b>부) 노종채</b>
                  <Divider type="vertical"/>
                  <CopyToClipboard
                      text={"농협 601134-52-084914"}
                  >
                      <Button
                          type="text"
                          style={{padding: 0, margin: 0}}
                          onClick={() => message.success("계좌번호가 복사되었습니다.")}
                      >
                          {"농협 601134-52-084914"}
                      </Button>
                  </CopyToClipboard>
              </div>
              <div style={{marginTop: 24, marginBottom: 24}}>
                  <b>모) 최순남</b>
                  <Divider type="vertical"/>
                  <CopyToClipboard text={"광주은행 057-121-762627"}>
                      <Button
                          type="text"
                          style={{padding: 0, margin: 0}}
                          onClick={() => message.success("계좌번호가 복사되었습니다.")}
                      >
                          {"광주은행 057-121-762627"}
                      </Button>
                  </CopyToClipboard>
              </div>
              <div>
                  <b>신랑 노용우</b>
                  <Divider type="vertical"/>
                  <CopyToClipboard text={"국민은행 797101-00-033727"}>
                      <Button
                          type="text"
                          style={{padding: 0, margin: 0}}
                          onClick={() => message.success("계좌번호가 복사되었습니다.")}
                      >
                          {"국민은행 797101-00-033727"}
                      </Button>
                  </CopyToClipboard>
              </div>
              <div>
                  <Description>
                      계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
                  </Description>
              </div>
          </Modal>
          <Modal
              title={<b>신부측 계좌번호</b>}
              open={brideVisible}
              onOk={() => setBrideVisible(false)}
              onCancel={() => setBrideVisible(false)}
              cancelButtonProps={{style: {display: "none"}}}
              okButtonProps={{style: {display: "none"}}}
              footer={null}
          >
              <div style={{marginTop: 24, marginBottom: 24}}>
                  <b>모) 박희자</b>
                  <Divider type="vertical"/>
                  <CopyToClipboard
                      text={"농협 325015 52 037691"}
                  >
                      <Button
                          type="text"
                          style={{padding: 0, margin: 0}}
                          onClick={() => message.success("계좌번호가 복사되었습니다.")}
                      >
                          {"농협 325015 52 037691"}
                      </Button>
                  </CopyToClipboard>
              </div>
              <div>
                  <b>신부 김지원</b>
                  <Divider type="vertical"/>
                  <CopyToClipboard text={"농협 352 0989 8306 03"}>
                      <Button
                          type="text"
                          style={{padding: 0, margin: 0}}
                          onClick={() => message.success("계좌번호가 복사되었습니다.")}
                      >
                          {"농협 352 0989 8306 03"}
                      </Button>
                  </CopyToClipboard>
              </div>
              <div>
                  <Description>
                      계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
                  </Description>
              </div>
          </Modal>
      </Wrapper>
  );
}
