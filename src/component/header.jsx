import styled from "styled-components"

const Header = () =>{
    return(
        <Container>
            <Wrapper>
                <Menu/>
                <Logo/>
                <NavsHolder>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <Nav>lorem</Nav>
                    <MessageIcon/>
                </NavsHolder>
                <SearchIcon/>
            </Wrapper>
        </Container>
    )
}

export default Header;

const SearchIcon = styled.img`
    width:30px;
    height:30px;
    background-color:lightgray;
    object-fit:cover;

    @media (min-width:1026px){
        display:none;
    }
`

const MessageIcon = styled.img`
    display:none;

    @media (min-width:1026px){
        display:block;
        width:30px;
        height:30px;
        background-color:lightgray;
        object-fit:cover; 
    }
`

const Nav = styled.nav``

const NavsHolder = styled.div`
    display:none;
    
    @media (min-width:1026px){
        display:flex;
    }
`

const Logo = styled.img`
    width:100px;
    height:100%;
    background-color:lightgray;
    object-fit:cover;
`

const Menu = styled.img`
    width:30px;
    height:30px;
    background-color:lightgray;
    object-fit:cover;

    @media (min-width:1026px){
        display:none;
    }
`

const Wrapper = styled.main`
    width:90%;
    height:90%;
    background-color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (min-width:1026px){
        width:80%;
    }
`

const Container = styled.header`
    width:100%;
    height:50px;
    background-color:grey;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0;
`