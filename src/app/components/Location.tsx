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
    background: #ffffff;
`;

const TitleWrapper = styled.div`
    padding: 100px 0px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export default function Location() {
    return (
        <Layout>
            <TitleWrapper>
                <div style={{margin: "0 auto"}}>
                    <h1 className="text-3xl font-bold text-2xl leading-tight">오시는 길</h1>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Image
                        // className="dark:invert"
                        src={`${prefix}/assets/images/map.png`}
                        alt="Next.js logo"
                        width={480}
                        height={38}
                        priority
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div>
                        [브라이드밸리 웨딩홀]<br/>
                        서울특별시 강남구 강남대로 262, 서울특별시 강남구 도곡동 949-3<br/>
                        양재 캠코 타워 B1층 브라이드밸리 웨딩홀
                    </div>
                    <div>
                        [주차 안내]<br/>
                        지하주차장 250대 수용, 웨딩홀 로비에서 차량번호 등록시 2시간 무료주차
                    </div>
                    <div>
                        [지하철]<br/>
                        3호선 신분당선 양재역 3번출구 도보2분(200m)
                    </div>
                    <div>
                        [버스]<br/>
                        뱅뱅사거리 정류장 하차<br/>
                        간선 140, 400, 402, 421, 440, 441, 470 / 직행 1550, 1570, 3002, 3007, 9700
                    </div>
                </div>
            </TitleWrapper>
        </Layout>
    );
}
