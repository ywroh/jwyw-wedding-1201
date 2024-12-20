"use client"
import styled from "styled-components";
import Image from "next/image";
import {prefix} from "@/config/config";

const Layout = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0px auto;
    border-bottom: 1px solid lightgray;
`;

const TitleWrapper = styled.div`
    padding: 50px 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const WeddingInvitation = styled.p`
    font-size: 1.5vh;
    opacity: 0.45;
    margin-bottom: 16;
`;

const GroomBride = styled.p`
    font-size: 3.5vh;
    font-weight: bold;
    opacity: 0.9;
    margin-bottom: 16;
`;

const Schedule = styled.p`
    text-align: center;
    font-size: 2vh;
    opacity: 0.65;
    margin-bottom: 24;
`;

export default function Title() {
    return (
        <Layout>
            <TitleWrapper>
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}><Image
                        // className="dark:invert"
                        src={`${prefix}/assets/images/flower.png`}
                        alt="Next.js logo"
                        width={100}
                        height={38}
                        priority
                    /></div>
                    <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
                    <GroomBride>
                        용우 ♥️ 지원
                    </GroomBride>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Image
                        // className="dark:invert"
                        src={`${prefix}/assets/images/IMG_2811_2.png`}
                        alt="Next.js logo"
                        width={400}
                        height={400}
                        priority
                        objectFit={"cover"}
                    />
                </div>
                <Schedule>
                    2024년 12월 01일, 일요일 오후 2시
                    <br/>
                    양재 브라이드밸리 웨딩홀
                </Schedule>
            </TitleWrapper>
        </Layout>
    );
}
