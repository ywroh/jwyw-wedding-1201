"use client"
import styled from "styled-components";
import React from "react";

const Layout = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 0px auto;
    border-bottom: 1px solid lightgray;
    background: rgba(255, 182, 193, 0.2);
`;

const TitleWrapper = styled.div`
    padding: 100px 0px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export default function Feast() {
    return (
        <Layout>
            <TitleWrapper>
                <div style={{margin: "0 auto"}}>
                    <h1 className="text-3xl font-bold text-2xl leading-tight">[신부 선잔치 안내]</h1>
                </div>
                <div style={{padding: "0px 20px", textAlign: "center", lineHeight: "2rem", wordBreak: "keep-all"}}>
                    결혼에 참석하지 못하시는 분들을 위해<br/>
                    작은 피로연 자리를 마련하였습니다.<br/>
                    귀한 걸음으로 축복해주시면 감사하겠습니다.<br/>
                    <br/>
                    2024년 11월 17일 일요일 오전 11시 ~ 오후 2시<br/>
                    원통 복지타운 별관<br/>
                    (강원 인제군 북면 금강로 62)
                </div>
                <div style={{height: "30px"}}></div>
                <div style={{margin: "0 auto"}}>
                    <h1 className="text-3xl font-bold text-2xl leading-tight">[광주 출발 전세버스]</h1>
                </div>
                <div style={{padding: "0px 20px", textAlign: "center", lineHeight: "2rem", wordBreak: "keep-all"}}>
                    버스번호 : 추가 예정(28인승 리무진)<br/>
                    기사님 성함 및 연락처 : 추가 예정<br/>
                    탑승장소 : 추가 예정<br/>
                    탑승시간 : 12/1일 08:00 출발 예정
                </div>
            </TitleWrapper>
        </Layout>
    );
}
