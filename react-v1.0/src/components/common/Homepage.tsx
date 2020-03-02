import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  padding-top: 32px;
  margin-bottom: 8px;
  color: #00ced1;
  font-weight: bold;
  font-size: 32px;
  border-bottom: 1px solid darkturquoise;
`;
const ContentText = styled.div`
  color: #666666;
  > li {
    margin-left: 8px;
    color: #003377;
  }
`;

const Homepage = () => {
  return (
    <>
      <Title>Styled-Component來喇</Title>
      <ContentText>但偷懶只改了首頁(๑´ڡ`๑)</ContentText>

      <Title>充版面的 VS Code 插件分享</Title>
      <ContentText>
        Visual Studio Code Extension 推薦:
        <li>ESLint - 代碼檢查</li>
        <li>TSLint - 也是代碼檢查</li>
        <li>Prettier - 自動排版，有時很方便、有時很煩XD</li>
        <br />
        其他純屬個人喜好，不太重要的 Extension:
        <li>
          Color Highlight - 顏色預覽，寫CSS時很好用 (個人習慣把 Marker Type
          設定改成 dot-before)
        </li>
        <li>Material Icon Theme - 可以把左側檔案清單加上圖示，比較一目了然</li>
        <li>
          Bracket Pair Colorizer - 配對括號的小工具，層次多時滿方便的
          (但也有人嫌彩色括號太花俏)
        </li>
      </ContentText>
    </>
  );
};

export default Homepage;
