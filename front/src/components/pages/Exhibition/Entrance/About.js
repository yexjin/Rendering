import React from 'react' 
import styled from 'styled-components';
import Img from '../../../../styles/images/yosigo3.png';
import { Link } from 'react-router-dom';

const AboutBox = styled.div`
animation: fadein 1s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

const CloseButton = styled.div`
color: black;
position: absolute;
font-size: 32px;

margin-left: 60px;
margin-top: 54px;
cursor: pointer;
`

const AboutContents = styled.div`
display: flex;
`;

const AboutImg = styled.div`
width: 517px;
height: 645px;

margin-top: 70px;
margin-left: 54px;

img{
    margin-top: 70px;
    width: 100%;
    height: 100%;
}
`

const Name = styled.div`
    text-align: left;
    font: normal normal 800 32px/36px NanumSquare;
    letter-spacing: 1.28px;
    color: #191919;
    opacity: 1;
    margin-top: 58px;
`

const Hr = styled.div`
width: 452px;
height: 1px;
/* UI Properties */
background: #D4D4D4 0% 0% no-repeat padding-box;
opacity: 1;
margin-top: 90px;
margin-bottom: 40px;
`

const BaseText = styled.div`
text-align: left;
font: normal normal 300 16px/24px NanumSquare;
letter-spacing: 0px;
color: #191919;
opacity: 1;
`

const PointText = styled.div`
text-align: left;
font: normal normal bold 24px/29px Roboto;
letter-spacing: 0.96px;
color: #191919;
opacity: 1;
margin-top: 60px;
`

const SubPoint = styled.div`
text-align: left;
font: normal normal bold 16px/24px NanumSquare;
letter-spacing: 0px;
color: #191919;
opacity: 1;
margin-bottom: 16px;
margin-top: 30px;
`

const TextContents = styled.div`
width: 517px;
height: 645px;
margin-top: 148px;
margin-left: 122px;
overflow-y: auto;
overflow-x: hidden;
`


function About() {

    return (
        <AboutBox>
            <Link to='/entrance'>
                <CloseButton>x</CloseButton>
            </Link>
            <AboutContents>
                <AboutImg>
                    <img src={Img}/>
                </AboutImg>
                <TextContents>
                    <Name>요시고 사진전: 따뜻한 휴일의 기록</Name>
                    <Hr />
                    <BaseText>
                    포토그래퍼 요시고의 국내 첫 개인전입니다. 
                    <br /><br />
                    푸른 지중해를 둘러싼 유럽의 휴양지부터 마이애미, 두바이, 부다페스트 등 세계 여러 여행지를 기록한 350여 점의 사진들을 건축, 다큐멘터리, 풍경 세가지 섹션 으로 구분하여 선보입니다. 
                    <br /><br />
                    사진이 품고 있는 따듯한 온도를 느끼며 팬데믹이 가져다 준 피로와 갈증을 해소 하고, 또 다른 내일을 향한 기대와 안정이 쌓이는 시간이 되길 바랍니다.
                    </BaseText>

                    <PointText>
                        View Point
                    </PointText>
                    <SubPoint>
                    1. 스페인의 떠오르는 아티스트, 요시고 YOSIGO의 국내 최초 전시
                    </SubPoint>
                    <BaseText>
                    SNS로 전 세계 팔로워를 확보하며 글로벌 잡지와 브랜드의 러브콜을 받는 포토그 래퍼 요시고. 국내 최초로 350여 점의 작품을 선보인다.
                    </BaseText>
                    <SubPoint>
                    2. 스페인의 떠오르는 아티스트, 요시고 YOSIGO의 국내 최초 전시
                    </SubPoint>
                    <BaseText>
                    SNS로 전 세계 팔로워를 확보하며 글로벌 잡지와 브랜드의 러브콜을 받는 포토그 래퍼 요시고. 국내 최초로 350여 점의 작품을 선보인다.
                    </BaseText>
                    <SubPoint>
                    3. 스페인의 떠오르는 아티스트, 요시고 YOSIGO의 국내 최초 전시
                    </SubPoint>
                    <BaseText>
                    SNS로 전 세계 팔로워를 확보하며 글로벌 잡지와 브랜드의 러브콜을 받는 포토그 래퍼 요시고. 국내 최초로 350여 점의 작품을 선보인다.
                    </BaseText>
                </TextContents>
            </AboutContents>       
        </AboutBox>
    )
}

export default About
