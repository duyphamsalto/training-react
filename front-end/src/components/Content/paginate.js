import React from "react";
import "./paginate.css";
import { useState, useEffect} from 'react';


export default function Pagination(props) {
  const { data, page, onChange } = props;

  function onPageChange(p) {
    onChange(p);
  }



// ページネーション表示切り替え
//   最後のページ
  const lastPage = data.last_page;

//   受け取ったdataのページ数をmapで回ｒす
//   現在ページ
  const currentPage = page;
  // const [currentPage, setCurrent] = useState(page);
  const [prevPage, setPrev] = useState(currentPage-1);
  const [PrevPagePlus, setPrevPlus] = useState(currentPage-2);
  const [nextPage, setNext] = useState(currentPage+1);
  const [NextPagePlus, setNextPlus] = useState(currentPage+2);

//   currentPageが3以下だったら...前に入れない
//   currentPageが＋3==lastPageだったら...後ろに入れない

//   useEffectで現在ページが変わったら再レンダリング
// let pageNum = [currentPage, currentPage+1, currentPage+2, currentPage+3, currentPage+4];
const [pageNum, setPageNum] = useState([currentPage, currentPage+1, currentPage+2, currentPage+3, currentPage+4]);
useEffect(() => {
  async function createPaginate(){
    if( currentPage <= 1){
      // setCurrent(currentPage);
      setPrev(currentPage-1);
      setPrevPlus(currentPage-2);
      setNext(currentPage+1);
      setNextPlus(currentPage+2);
      console.log("最初のページ");
      setPageNum([currentPage, nextPage, NextPagePlus])
      // pageNum.push(currentPage, currentPage+1, currentPage+2, currentPage+3, currentPage+4);
    } else if ( (currentPage + 3) >= lastPage ) {
      console.log("最後のページ");
      setPageNum([PrevPagePlus, prevPage, currentPage])
      // pageNum.push(currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2);    
    } else {
      console.log("途中");
      setPrev(currentPage-1);
      setPrevPlus(currentPage-2);
      setNext(currentPage+1);
      setNextPlus(currentPage+2);
      setPageNum([PrevPagePlus, prevPage, currentPage, nextPage, NextPagePlus])
      // pageNum.push(currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2);
    }
  }
  createPaginate();
}, [currentPage])

// console.log(pageNum);

const pagenate = ( 
  pageNum.map((p) => 
        <li>
          <a onClick={() => onPageChange(p)}>
            <span>{p}</span>
          </a>
        </li>
));

// console.log(pagenate);
// console.log(currentPage);

  return (
    <div className="pager">
      <ul className="pagination">
        <li className="pre">
        {/* first_page_urlがあれば表示 */}
          <a onClick={() => onPageChange(1)}>
            <span>≪</span>
          </a>
        </li>
        {/* <li>
          <a onClick={() => onPageChange(1)}>
            <span>1</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(2)}>
            <span>2</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(3)}>
            <span>3</span>
          </a>
        </li>
        <li>
          <a onClick={() => onPageChange(4)}>
            <span>4</span>
          </a>
        </li> */}
        {pagenate}
        <li className="next">
        {/* last_page_urlがあれば表示 */}
          {/* <a onClick={() => onPageChange(lastPage)}>
            <span>＞＞</span>
          </a> */}
        </li>
      </ul>
    </div>
  );
}