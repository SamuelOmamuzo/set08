import styled from "styled-components"

const Card  = ({text1,text2,src,alt,bg,br,bs,fd}) =>{
    return(
        <Container br={br} bs={bs} fd={fd}>
            <Wrapper>
                <H1>
                    {text1}
                </H1>
                <P>
                    {text2}
                </P>
            </Wrapper>
            <Image src={src} alt={alt} bg={bg}/>
        </Container>
    )
}

export default Card;

const Image = styled.img`
    width:75px;
    height:75px;
    border-radius:50%;
    background-color: ${({bg})=>bg};
`

const P = styled.p``

const H1 = styled.h1``

const Wrapper = styled.div`
    width: 70%;
    background-color: aqua;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: blue;
    margin-top: 20px;
    border-radius: ${({br})=>br};
    box-shadow: ${({bs})=>bs};
    flex-direction: ${({fd})=>fd};
`