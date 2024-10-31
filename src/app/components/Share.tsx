import {LinkOutlined} from "@ant-design/icons";
import {Button, Divider, message} from "antd";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 100px 0px;
    background: #ffffff;
    width: 100%;
    text-align: center;
`;

const Title = styled.p`
    font-size: 2vh;
    font-weight: bold;
    opacity: 0.85;
`;

const LinkShareButton = styled(Button)`
    background: #53acee;
    borderColor: #53acee;
    color: #ffffff;

    &:hover {
        backgroundColor: #9fcbed !important;
        borderColor: #9fcbed !important;
        color: #ffffff !important;
    }

    &:focus {
        backgroundColor: #9fcbed !important;
        borderColor: #9fcbed !important;
        color: #ffffff !important;
    }
`;

export default function Share() {
    return (
        <Wrapper>
            <Divider plain style={{marginTop: 0, marginBottom: 32}}>
                <Title>청첩장 공유하기</Title>
            </Divider>
            <CopyToClipboard text={"https://ywroh.github.io/jwyw-wedding-1201/"}>
                <LinkShareButton
                    style={{margin: 8}}
                    icon={<LinkOutlined/>}
                    size="large"
                    onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
                >
                    링크로 공유하기
                </LinkShareButton>
            </CopyToClipboard>
        </Wrapper>
    );
}
