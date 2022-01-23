import "./Issue.scss";
import { brandRank } from "../../data";

const Issue = () => {
  return (
    <div className="issue">
      <div className="issue__header">
        <span>Happened’s issue</span>
        <p>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <div className="issue__btn">See More</div>
      </div>
      <div className="issue__content">
        <div className="issue__content-item">
          <span>whpn issue</span>
          <img src="./Img/news-img-01.png" />
        </div>
        {brandRank.map((item, index) => (
          <div className="issue__content-brand" key={index}> 
            <div className="brand__rank">
              <span>{item.title}</span>
            </div>
            <div className="brand__img">
              <img src={item.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issue;
