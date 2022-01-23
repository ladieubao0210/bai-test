import Header from "../components/Header/Header";
import BannerMain from "../components/Banner/BannerMain";
import Banner2 from "../components/Banner/Banner2";
import BestProduct from "../components/BestProduct/BestProduct";
import ProductList from "../components/ProductList/ProductList";
import Brand from '../components/Brand/Brand';
import Issue from '../components/Issue/Issue';
import Final from '../components/Final/Final';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BannerMain />
      <Banner2 />
      <BestProduct />
      <ProductList />
      <Brand />
      <Issue />
      <Final />
      <Footer />
    </div>
  );
};

export default Home;
