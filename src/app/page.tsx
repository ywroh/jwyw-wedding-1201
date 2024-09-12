import Image from "next/image";
import {prefix} from "@/config/config";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    // className="dark:invert"
                    src={`${prefix}/images/main.png`}
                    alt="Next.js logo"
                    width={480}
                    height={38}
                    priority
                />
                <Image
                    // className="dark:invert"
                    src={`${prefix}/images/flower.png`}
                    alt="Next.js logo"
                    width={160}
                    height={38}
                    priority
                />
                <h1 className="text-3xl font-bold text-2xl leading-tight">용우 ❤️ 지원 결혼합니다.</h1>
                <div>용감한 사나이 용우와 지혜롭고 귀여운 지원이가 만나<br/>
                    기쁠때나 슬플때나 항상 옆에서 서로 배려하고 사랑하며<br/>
                    오순도순 평생을 함께 하려합니다.<br/>
                    소중한 시간을 내어 저희 결혼식에 오셔서 많은 축하 부탁드립니다.
                </div>
                <div>
                    <span>노종채 • 최순남 의 장남</span>
                    <span>노용우</span>
                </div>
                <div>
                    <span>故 김남진 • 박희자 의 장녀</span>
                    <span>김지원</span>
                </div>
                <div>
                    2024년 12월 01일 일요일 오후2시<br/>
                    양재 브라이드밸리 웨딩홀
                </div>
                <div>
                    [브라이드밸리 웨딩홀]
                </div>
                <div>
                    서울특별시 강남구 강남대로 262, 서울특별시 강남구 도곡동 949-3<br/>
                    양재 캠코 타워 B1층 브라이드밸리 웨딩홀
                </div>
                <div>
                    [지하주차장 250대 수용, 웨딩홀 로비에서 차량번호 등록시 2시간 무료주차]<br/>
                    [지하철]<br/>
                    3호선 신분당선 양재역 3번출구 도보2분(200m)<br/>
                    [버스]<br/>
                    뱅뱅사거리 정류장 하차<br/>
                    간선 140, 400, 402, 421, 440, 441, 470 / 직행 1550, 1570, 3002, 3007, 9700
                </div>
                <Image
                    // className="dark:invert"
                    src={`${prefix}/images/map.png`}
                    alt="Next.js logo"
                    width={480}
                    height={38}
                    priority
                />
                {/*<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">*/}
                {/*    <li className="mb-2">*/}
                {/*      Get started by editing{" "}*/}
                {/*      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">*/}
                {/*        src/app/page.tsx*/}
                {/*      </code>*/}
                {/*      .*/}
                {/*    </li>*/}
                {/*    <li>Save and see your changes instantly.</li>*/}
                {/*</ol>*/}

                {/*<div className="flex gap-4 items-center flex-col sm:flex-row">*/}
                {/*    <a*/}
                {/*        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"*/}
                {/*        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        <Image*/}
                {/*            className="dark:invert"*/}
                {/*            src="https://nextjs.org/icons/vercel.svg"*/}
                {/*            alt="Vercel logomark"*/}
                {/*            width={20}*/}
                {/*            height={20}*/}
                {/*        />*/}
                {/*        Deploy now*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"*/}
                {/*        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        Read our docs*/}
                {/*    </a>*/}
                {/*</div>*/}
            </main>
            {/*<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">*/}
            {/*    <a*/}
            {/*        className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
            {/*        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            aria-hidden*/}
            {/*            src="https://nextjs.org/icons/file.svg"*/}
            {/*            alt="File icon"*/}
            {/*            width={16}*/}
            {/*            height={16}*/}
            {/*        />*/}
            {/*        Learn*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
            {/*        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            aria-hidden*/}
            {/*            src="https://nextjs.org/icons/window.svg"*/}
            {/*            alt="Window icon"*/}
            {/*            width={16}*/}
            {/*            height={16}*/}
            {/*        />*/}
            {/*        Examples*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
            {/*        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            aria-hidden*/}
            {/*            src="https://nextjs.org/icons/globe.svg"*/}
            {/*            alt="Globe icon"*/}
            {/*            width={16}*/}
            {/*            height={16}*/}
            {/*        />*/}
            {/*        Go to nextjs.org →*/}
            {/*    </a>*/}
            {/*</footer>*/}
        </div>
    );
}
