import styled from "styled-components"
import Card from "./Card";

const Welcome = () =>{

    const data = [
        {
            id:1,
            title:"Lorem 4.0",
            disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta facere! Reprehenderit, obcaecati ipsum. Delectus.",
            bg:"red"
        },
        {
            id:2,
            title:"Lorem 4.0",
            disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta facere! Reprehenderit, obcaecati ipsum. Delectus.",
            bg:"lightblue"
        },
        {
            id:3,
            title:"Lorem 4.0",
            disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta facere! Reprehenderit, obcaecati ipsum. Delectus.",
            bg:"lightblue"
        }
    ]

    return(
        <Container>
            <Wrapper>
                <Holder>
                    <H1>
                        Welcome To <span>Layer</span>
                    </H1>
                    <Object></Object>
                    <P>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt fuga vitae. Praesentium rem consequuntur, ab suscipit minima repellendus dolore quisquam veniam recusandae optio. Minus dolorem quasi totam labore! 
                    </P>
                </Holder>
                <First>
                <Holder2>
                    {
                        data.map((props)=>(
                            <Card key={props.id} br={"0px"} bs={""} fd={""} bg={props.bg} src={" "} text1={props.title} text2={props.disc} alt={""}/>
                        ))
                    }
                </Holder2>
                <Image/>
                </First>
            </Wrapper>
        </Container>
    )
}

export default Welcome;

const Image = styled.img`
    width:100%;
    height: 500px;
    background-color: lightgray;

    @media (min-width:1024px){
        width:65%;
    }
`

const Holder2 = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0px;
    background-color:yellow;

    @media (min-width:1024px){
        width:30%;
    }
`

const Object = styled.div``

const P = styled.p`
    @media (min-width:1024px){
        width:50%;
    }
`

const H1 = styled.h1`
    font-size: 35px;

    span{
        color:#E74C3C;
    }
`

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: aqua;
    text-align: center;
`

const First = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (min-width:1024px){
        justify-content: space-between;
    }  
`

const Wrapper = styled.main`
    width:90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;

    @media (min-width:1057px){
        width: 80%;
        justify-content: space-between;
    }
`

const Container = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 20px 0px;
    background-color:red;
`