import { NavLink, Quote, QuoteWrap, Title, WrapperPage } from "./Welcome.styled"


export const Welcome = () => {
    return (
        <>
            <WrapperPage>
                <Title>Our company UkrCampers will help you choose Campers for active recreation and travel</Title>
                <QuoteWrap>
                     <Quote>“The world is a book, and those who do not travel have time to read only the first page” - Art. Augustine.</Quote>
                </QuoteWrap>
                <NavLink>Find your camper</NavLink>
            </WrapperPage>
            
        </>
    )
}