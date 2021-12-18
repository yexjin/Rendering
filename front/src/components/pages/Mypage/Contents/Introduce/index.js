import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { usePamphlets, useExhibitions } from '../../../../../components'

const Inputs = styled.div`
width: 696px;
margin-top: 54px;
height: 100%;
`

const LabelwithInput = styled.div`
margin-bottom: 20px;
display: flex;
margin-left: 14px;
`
const Label = styled.label`
padding-top: 10px;
font-family: Noto Sans Thin;
font-size: 20px/29px;
text-align: left;
color: #767676;
font-weight: 900;
height: 60px;
width: 95px;
vertical-align: center;
`

const Input = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
width: 600px;
height: 50px;
`
const InputBig = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
width: 600px;
height: 242px;
`

const FloatBox = styled.div`
width: 700px;
`

const Comment = styled.div`
text-align: right;
font-size: 16px/24px;
font-family: Noto Sans Thin;
font-weight: 700;
letter-spacing: 0px;
color: #767676;
opacity: 1;
`

const Preview = styled.div`
background-color: #ffffff;
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
border-radius: 5px;
text-align: center;
padding-top: 10px;
cursor: pointer;
margin-left: 517px;
`

const Submit = styled.div`
margin-top: 100px;
background-color: #ffffff;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
border-radius: 5px;
text-align: center;
padding-top: 10px;
cursor: pointer;
float: right;
margin-bottom: 130px;
`


function Introduce() {

    const { id } = useParams(); // URL 파라미터 조회하기

    const { pamphletInfo, getPamphlet } = usePamphlets();

    const { exhibitpatchApi, exhibition, getExhibition } = useExhibitions();
    
    const exhibitionId = exhibition.id;
    
    const navigate = useNavigate();

    const [data, setData] = useState({
        exhibition_name: exhibition.exhibition_name,
        host_name: exhibition.host_name,
        description: exhibition.description,
        start_date: exhibition.start_date,
        end_date: exhibition.end_date,
        main_image: exhibition.main_image,
        sub_image: exhibition.sub_image
    })

    const [main_image, setMainImage] = useState(null);

    const imageChange1 = (e) => {
        setMainImage(e.target.files[0]);
    };
    const imageChange2 = (e) => {
        setSubImage(e.target.files[0]);
    };

    const [sub_image, setSubImage] = useState(null);
    
    useEffect(() => {
        setData({
            exhibition_name: exhibition.exhibition_name,
            host_name : exhibition.host_name,
            description: exhibition.description,
            start_date: exhibition.start_date,
            end_date: exhibition.end_date
          });
        },[]);

    useEffect(()=>{
        const fetch = async () => {
            try {
            await getPamphlet(id);
            await getExhibition(exhibitionId);
            } catch(err){
            console.log(err);
            }
        };
        fetch();
    },[])

     
    // const {exhibition_name, host_name, description, start_date, end_date} = data;
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const createHandler = async () => { 
        const changeData = new FormData();
        changeData.append('exhibition_name', data.exhibition_name);
        changeData.append('host_name', data.host_name);
        changeData.append('description', data.description);
        changeData.append('start_date', data.start_date);
        changeData.append('end_date', data.end_date);
        changeData.append("main_image", main_image);
        changeData.append("sub_image", sub_image);

        try {
         await exhibitpatchApi(exhibitionId, changeData);
         alert('내용 수정이 완료되었습니다.')
         navigate(`/mypage/${id}`);
     } catch (e) {
       alert(e);
     }
   };  
    

    return (
       <>
       <Inputs>
       <LabelwithInput>
            <Label>전시명</Label> 
            <Input
                name="exhibition_name"
                type="text"
                placeholder={exhibition.exhibition_name}
                value={data.exhibition_name}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>주관</Label> 
            <Input
                name="host_name"
                type="text"
                placeholder={exhibition.host_name}
                value={data.host_name}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>전시 설명</Label>
            <InputBig
                name="description"
                type="text"
                placeholder={exhibition.description}
                value={data.description}
                onChange={handleChange}
            >
            </InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>시작 날짜</Label> 
            <Input
                name="start_date"
                type="date"
                placeholder={exhibition.start_date}
                value={data.start_date}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>종료 날짜</Label>
            <Input
                name="end_date"
                type="date"
                placeholder={exhibition.end_date}
                value={data.end_date}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>대표 사진</Label>             
            <Input
                name="main_image"
                type="file"
                value={data.main_image}
                onChange={imageChange1}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>추가 사진</Label>
            <Input
                name="main_image"
                type="file"
                value={data.sub_image}
                onChange={imageChange2}
            ></Input>
        </LabelwithInput>
       <FloatBox>
            <Comment>추가 사진은 온리인 전시 페이지 〉'About' 페이지에 들어갈 전시 소개에 추가 됩니다.</Comment>
       </FloatBox>
            <Preview>소개 페이지 미리보기</Preview>
            <Submit onClick={createHandler}>저장</Submit>
       </Inputs>
       </>
    )
}

export default Introduce
