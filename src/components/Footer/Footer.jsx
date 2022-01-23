import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
          <div className="footer__right-list">
            <span>about us</span>
            <ul>
              <li>
                <a href="/#">회사 소개</a>
              </li>
              <li>
                <a href="/#">인재 채용</a>
              </li>
              <li>
                <a href="/#">상시 할인 혜택</a>
              </li>
            </ul>
          </div>
          <div className="footer__right-list">
            <span>my order</span>
            <ul>
              <li>
                <a href="/#">내 주문</a>
              </li>
              <li>
                <a href="/#">주문 배송</a>
              </li>
              <li>
                <a href="/#">취소 / 교환 / 반품 내역</a>
              </li>
              <li>
                <a href="/#">상품 리뷰 내역</a>
              </li>
              <li>
                <a href="/#">증빙 서류 발급</a>
              </li>
            </ul>
          </div>
          <div className="footer__right-list">
            <span>my account</span>
            <ul>
              <li>
                <a href="/#">회원 정보 수정</a>
              </li>
              <li>
                <a href="/#">회원 등급</a>
              </li>
              <li>
                <a href="/#">마일리지 현황</a>
              </li>
              <li>
                <a href="/#">쿠폰</a>
              </li>
            </ul>
          </div>
          <div className="footer__right-list">
            <span>help</span>
            <ul>
              <li>
                <a href="/#">1 : 1 상담 내역</a>
              </li>
              <li>
                <a href="/#">상품 QA 내역</a>
              </li>
              <li>
                <a href="/#">공지 사항</a>
              </li>
              <li>
                <a href="/#">자주하는 질문</a>
              </li>
              <li>
                <a href="/#">고객의 소리</a>
              </li>
            </ul>
          </div>
        </div> 
      </div>
  );
};

export default Footer;
