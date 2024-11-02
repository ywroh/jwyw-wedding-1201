"use client"
import styled from "styled-components";
import React from "react";
import Image from "next/image";
import {prefix} from "@/config/config";

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

export default function Message() {
    return (
        <Layout>
            <TitleWrapper>
                <div style={{margin: "0 auto"}}>
                    <h1 className="text-3xl font-bold text-2xl leading-tight">용우 ♥︎ 지원 결혼합니다.</h1>
                </div>
                <div style={{padding: "0px 20px", textAlign: "center", lineHeight: "2rem", wordBreak: "keep-all"}}>용감하고
                    다정한 사나이 용우와<br/>지혜롭고 귀여운 지원이가
                    만나<br/>
                    항상 서로 배려하고 사랑하며<br/>
                    오순도순 평생을 함께 하려합니다.<br/>
                    소중한 시간을 내어 저희 결혼식에 오셔서<br/>많은 축하 부탁드립니다.
                </div>
                <div style={{display: "flex", justifyContent: "center", gap: "6px", alignItems: "center"}}>
                    <div style={{display: "flex"}}>
                        <div style={{width: "24px"}}></div>
                        <div style={{fontSize: "1.2rem", fontWeight: "bold"}}>노종채 • 최순남</div>
                    </div>
                    <div>의 장남</div>
                    <div style={{fontSize: "1.2rem", fontWeight: "bold"}}>노용우</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", gap: "6px", alignItems: "center"}}>
                    <div style={{display: "flex"}}>
                        <Image
                            // className="dark:invert"
                            src={`${prefix}/assets/images/chrysanthemum.png`}
                            alt="father"
                            width={24}
                            height={20}
                            priority
                            objectFit={"cover"}
                        />
                        <div style={{fontSize: "1.2rem", fontWeight: "bold"}}>김남진</div>
                    </div>
                    <div style={{fontSize: "1.2rem", fontWeight: "bold"}}> • 박희자</div>
                    <div>의 장녀</div>
                    <div style={{fontSize: "1.2rem", fontWeight: "bold"}}>김지원</div>
                </div>
            </TitleWrapper>
        </Layout>
    )
        ;
}
