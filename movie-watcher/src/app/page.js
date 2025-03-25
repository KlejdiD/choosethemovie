// app/page.js (Server Component)
import MovieGrid from "./components/MovieGrid";
import HeaderComponent from "./layouts/HeaderComponent";
import SubHeader from "./layouts/SubHeader";
import PopularMovies from "./components/PopularMovies.js";

const Page = async () => {
  return (
    <div className="bg-white">
      <HeaderComponent />
      <SubHeader />
      <PopularMovies />
    </div>
  );
};

export default Page;
