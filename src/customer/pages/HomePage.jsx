import { mens_kurta } from "../../data/mens_kurta";
import { HomeCardCarousel } from "../components/HomeCardCarousel";
import { MainCarousel } from "../components/MainCarousel";

const HomePage = () => {
    return ( 
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeCardCarousel data={mens_kurta} sectionName="Men's Kurta"/>
                <HomeCardCarousel data={mens_kurta} sectionName="Men's Shoes"/>
                <HomeCardCarousel data={mens_kurta} sectionName="Men's Shirt"/>
                <HomeCardCarousel data={mens_kurta} sectionName="Women's Saree"/>
                <HomeCardCarousel data={mens_kurta} sectionName="Women's Dress"/>
            </div>
        </div>
     );
}
 
export default HomePage;