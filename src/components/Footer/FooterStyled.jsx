import styled from "styled-components";
import {GrFacebookOption, GrPinterest} from "react-icons/gr";
import {AiOutlineInstagram, AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
const FooterContainer = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 10px;
  border-top: 1px solid #ebebeb;
  margin-top: 70px;
  @media screen and (max-width: 705px) {
    flex-direction: column-reverse;
  }
`;

const FooterLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #777;
    @media screen and (max-width: 705px) {
      flex-direction: column-reverse;
    }
`

const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & svg:hover{
    color: #c96;
    cursor: pointer;
  }
  @media screen and (max-width: 705px) {
    margin-bottom: 12px;
  }
`

const FooterCopyRight = styled.div`
     @media screen and (max-width: 705px) {
       text-align: center;
     }
`
const FooterMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 705px) {
      margin-bottom: 12px;
    }
`
const FooterMenuList = styled.li`
 & a {
    color: #777;
    box-shadow: 0 1px 0 #b5b5b5;
 }
 & a:hover {
    color: #c96;
    box-shadow: 0 1px #c96;
 }
 @media screen and (max-width: 705px) {
   &:last-child{
    border-left: 1px solid #b5b5b5;
    padding-left: 10px;
   }
 }
`

const FaceBookIcon = styled(GrFacebookOption)`
 color: #8f79ed;
`

const TwitterIcon = styled(AiOutlineTwitter)`
color: #79c8ed;`

const InstagramIcon = styled(AiOutlineInstagram)`
 color: #dd6d9a;
`
const YoutubeIcon = styled(AiFillYoutube)`
 color: #e66262;
`
const PinterestIcon = styled(GrPinterest)`
 color: #e66262;
`
export {
  FooterContainer,
  FooterWrapper,
  FooterLeft,
  FooterSocialIcons,
  FooterCopyRight,
  FooterMenu,
  FooterMenuList,
  FaceBookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon
}