
import { HBanner } from "../components/HBanner";
import { Categories } from './../components/Categories';

export const MainPage = () => {
  

    return (
      <div className="row">
        <div className="col l2 left-bar">
        <div className="row">
          <Categories categories={null}/>
          </div>
        </div>
        <div className="col l10 items">
          <div className="col l12">
            <div className="row">
              <HBanner type={{id:0}}/>
              <HBanner type={{id:1, category:'jeans'}}/>
              <HBanner type={{id:1, category:'garden'}}/>
              <HBanner type={{id:2}}/>
            </div>
          </div>
        </div>
      </div>
    );
};
