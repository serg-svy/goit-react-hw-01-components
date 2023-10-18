import styled from 'styled-components';

export const Wrapper = styled.div`
margin: 20px 0 20px 20px;
width: 250px;
height: auto;
border: 1px solid #808080;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;`

export const ProfileMainPart = styled.div`
width: 100%;
padding-top: 20px;`

export const ProfilePic = styled.img`
display: block;
width: 100px;
height: 100px;
border-radius: 100%;
margin-left: auto;
    margin-right: auto;
margin-bottom: 20px;
`

export const ProfileText = styled.p`
text-align: center;
margin: 10px 0 0 0;
font-size: 16px;
color: #808080;
`

export const ProfileName = styled(ProfileText)`
margin: 0%;;
font-size: 20px;
font-weight: bold;
color: #000000;`

