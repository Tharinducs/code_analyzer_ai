import styled from "styled-components"
import {
  Typography,
} from "@mui/material"


const FooterContainer = styled.footer`
  background-color: #3f51b5;
  color: #fff;
  padding: 4rem 0 2rem 0;
`

const CopyrightText = styled(Typography)`
  color: #fff;
  text-align: center;
  margin-top: 2rem;
`

const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ContactItem = styled.div`
  text-align: center;
  
  @media (min-width: 600px) {
    &:first-child {
      text-align: left;
    }
    
    &:last-child {
      text-align: right;
    }
  }
`

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
        <ContactInfoContainer>
          <ContactItem>
            <Typography variant="body2" color="#fff">
              📍 123 Business Avenue, Tech City
            </Typography>
          </ContactItem>
          <ContactItem>
            <Typography variant="body2" color="#fff">
              📞 +1 (555) 123-4567
            </Typography>
          </ContactItem>
          <ContactItem>
            <Typography variant="body2" color="#fff">
              ✉️ info@t.com
            </Typography>
          </ContactItem>
        </ContactInfoContainer>
        <CopyrightText variant="body2">© {currentYear}  Inc. All rights reserved.</CopyrightText>
    </FooterContainer>
  )
}