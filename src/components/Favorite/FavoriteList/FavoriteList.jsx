import { useSelector } from "react-redux"
import { selectFavoriteCampers } from "../../../redux/selectors"
import { EmptyListMsg, WrapperEmptyMsg } from "./FavoriteList.styled";
import { CampersItem } from "../../Catalog/CamperItem/CamperItem";
import { RedirectToCatalogPage } from "../RedirectToCatalog/RedirectToCatalog";


export const FavoriteList = () => {
    const favorites = useSelector(selectFavoriteCampers);

    return (
        <>
            {favorites.length === 0 ? (
                <WrapperEmptyMsg>
                    <EmptyListMsg>
                        Hi there! It seems like the list for chosen campers is empty. Could
                        you please add them first? Thank you!
                    </EmptyListMsg>
                    <RedirectToCatalogPage/>
                </WrapperEmptyMsg>
            ) : (
                <ul>
                    {favorites.map((item) => (
                        <CampersItem key={item._id} value={item} />
                    ))}
                </ul>
            )}
        </>
        
    );
};