import { BsFillStarFill as StarYellow } from "react-icons/bs";
import { BsFillStarFill as StarGrey } from "react-icons/bs";
import { Avatar, Comment, Head, ListItem, ListReviews, Name, WrapperStrats } from "./Reviews.styled";

export const Reviews = ({ data: { reviews } }) => {
    
    const Rating = ({ reviewer_rating }) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < reviewer_rating) {
                stars.push(<span key={i}><StarYellow style={{ color: "#ffc531", }} /></span>);
            } else {
                stars.push(<span key={i}><StarGrey style={{ color: "#ffc531", }} /></span>);
            }
        }
        return <WrapperStrats>{stars}</WrapperStrats>
    };


    return (
        <>
            <ListReviews>
                {reviews.map((item) => (
                    <ListItem key={item.reviewer_name}>
                        <Head>
                            <Avatar>
                                <p>{item.reviewer_name[0]}</p>
                            </Avatar>
                            <div>
                                <Name>{item.reviewer_name}</Name>
                                <Rating reviewer_rating={item.reviewer_rating} />
                            </div>
                        </Head>
                        <Comment>{item.comment}</Comment>
                    </ListItem>
                ))}
            </ListReviews>
        </>
    );
};