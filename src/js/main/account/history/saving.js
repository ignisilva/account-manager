export function getHistorySaving() {
  let template = `
    <div class="swiper-wrapper">
      <div class="saving-box swiper-slide">
        <div class="achieve"></div>
        <strong>여행가자!</strong>
        <span class="price">842,200원</span>
      </div>
      <div class="saving-box swiper-slide">
        <div class="achieve"></div>
        <strong>냉장고사기!</strong>
        <span class="price">142,200원</span>
      </div>
      <div class="add-btn swiper-slide">
        <span class="material-icons-outlined">add_circle</span>
        <span class="text">저금통 만들기</span>
      </div>
    </div>
  `;

  return template;
}
