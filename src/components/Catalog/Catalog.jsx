import { CamperFilter } from "./CamperFilter/CamperFilter"
import { WrapperCatalog } from "./Catalog.styled"
import { CatalogCamperList } from "./CatalogList/CatalogCamperList"


export const Catalog = () => {
    return (
        <>
            <WrapperCatalog>
                <CamperFilter />
                <CatalogCamperList/>
            </WrapperCatalog>
        </>
    )
}