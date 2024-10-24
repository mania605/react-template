import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import Modal from '../common/Modal';
import Content from '../common/Content';
import { useFlickrQuery } from '../../hooks/useFlickr';
import { AnimatePresence } from 'framer-motion';
import { useZustandStore } from '../../hooks/useZustand';
import React from 'react';
import { Helmet } from 'react-helmet'; 

export default function Story() {
	return (
		<Layout title={'STORY'} >
			<Helmet>
				<title>AVALLION</title>
				<meta name="description" content="극도로 정교한 하이테크 기술력을 바탕으로 일상의 루틴에 변화를 제공하는 리츄얼 스킨케어입니다." />
				{/* Add other meta tags here */}
			</Helmet>
			
			<Content delay={1}>
				{/* JSX structure added here */}
				<section className="grid-helper none">
					<div className="container d-block-m">
						{/* Your JSX content */}
						<div>


						<section className="video-box">
						<video autoplay loop muted width="100%">
    <source src="public\tech_3.mp4" type="video/mp4" /> 
    Your browser does not support the video tag.
  </video> 
</section>


      {/* 첫 번째 제품 - Chrono Elixir */}
      <div className="column col-4-6 product-holder">
        <div className="column col-half col-full-m margin-m img-holder">
          <figure className="motion onTrans">
 
            <div className="mask"></div>
          </figure>
        </div>
        <div className="column col-half col-full-m margin-m">
          <article className="motion onTrans">
            <h4>Chrono Elixir™</h4>
            <span>크로노 엘릭서</span>
            <p>
              어느 한쪽으로도 치우치지 않는 제로-밸런스 포인트에 도달함으로써 세월의 흐름에 따른 노화 징후와 외부자극으로 인해 흐트러진 피부를 근본적으로 관리하는 오에라의 기술력이 집약된 독자적인 콤플렉스
            </p>
            <div className="mask-txt motion onTrans">
              <a href="/philosophy/technology/" className="underline-button" data-hover="자세히 보기">
                자세히 보기
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* 두 번째 제품 - Calibrating */}
      <div className="column col-4-6 product-holder">
        <div className="column col-half col-full-m margin-m order-1-m">
          <article className="motion onTrans">
            <h4>Calibrating™</h4>
            <span>캘리브레이팅™</span>
            <p>
              흐트러진 피부 리듬을 케어해 이상적인 피부 상태로 만드는 오에라만의 처방 솔루션
            </p>
            <div className="mask-txt motion onTrans">
              <a href="/philosophy/calibration-ritual/" className="underline-button" data-hover="자세히 보기">
                자세히 보기
              </a>
            </div>
          </article>
        </div>
        <div className="column col-half col-full-m margin-m img-holder">
          <figure className="motion onTrans">
            <img src="public\Nera3.png" alt="Calibrating Ritual" />
						<h4>CREMA NERA</h4>
						<p>흐트러진 피부 리듬을 케어해 이상적인 피부 상태로 만드는 오에라만의 처방 솔루션 </p>
            <div className="mask"></div>
          </figure>
        </div>
      </div>
    </div>
					</div>
				</section>

				<div className="two">

						<h4>Dual-Action Chrono Ampoule</h4>
						<p>
						듀얼-액션 크로노 앰플<br/>
						주름｜미백 기능성 화장품<br/>
						독자적인 크로노엘릭서™의 농축된 에너지가 외부로부터 자극 받은 피부를 진정시키고 피부톤과 결, 탄력을 종합적으로 케어하는 더블 앰플
						</p>

				</div>
				// eslint-disable-next-line react/no-unknown-property
				<div>					<img scr="public\silver.jpeg" alt="Dual"/></div>

				<header>
					{/* Header and other JSX structure */}
				</header>

 


 
			</Content>
		</Layout>
	);
}
