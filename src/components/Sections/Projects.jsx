import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";
import Grafik1 from '../Elements/Grafik1'
import Grafik2 from "../Elements/Grafik2";
import Grafik3 from "../Elements/Grafik3";
import Grafik4 from "../Elements/Grafik4";
import Grafik5 from "../Elements/Grafik5";
import {Link} from "react-scroll"

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Analisis Berdasarkan Grafik📈</h1>
            <p className="font13">
              Berdasarkan data Perpustakaan di San Fransico yang bersumber dari <a className="semiBold font15 purpleColor"  href="https://www.kaggle.com/datasets/datasf/sf-library-usage-data">Kaggle</a>.
              Berikut analisa kami berdasarkan data.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Kategori Pelanggan Pustaka berdasarkan jumlah buku yang dipinjam"
                text="Berdasarkan data yang ada, perlunya edukasi lebih dalam lagi tentang minat baca 
                ke segala umur terutama kategori juvenile yaitu 
                kategori remaja karena literasi itu sangatlah penting 
                untuk para remaja saat dalam proses masa pertumbuhannya."
                data_modal="staticModal1"
              />
                <Grafik1 chartID="grafik1" data_modal="staticModal1"/>          
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Banyaknya Jumlah Buku yang dipinjam berdasarkan tahun"
                text="Berdasarkan data yang ada, perlunya mempertahankan atau bahkan meningkatkan
                kembali minat baca masyarakat agar literasi pada masyarakat itu tidak pudar pada
                tahun tahun berikutnya."
                data_modal="staticModal2"
              />
              <Grafik2 chartID="grafik2" data_modal="staticModal2"/>   
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Banyaknya Jumlah buku yang dipinjam berdasarkan lokasi"
                text="Berdasarkan data yang ada, perlunya peningkatan kualitas sarana dan prasarana
                dari berbagai lokasi perpustakaan yang ada agar membuat masyarakat nyaman
                dalam membaca dan meminjam buku"
                data_modal="staticModal3"
              />
              <Grafik3 chartID="grafik3" data_modal="staticModal3"/>
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Banyaknya jumlah buku peminjam berdasarkan asal daerah pelanggan"
                text="Perlunya peningkatan terhadap sarana dan prasarana agar perpustakaan lebih
                banyak lagi dikunjungi para warga asing."
                data_modal="staticModal4"
              />              
              <Grafik4 chartID="grafik4" data_modal="staticModal4" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Top 3 rentang umur peminjam terbanyak berdasarkan jumlah buku yang dipinjam"
                text="Perlunya edukasi dari orang tua tentang literasi buku sejak dini karena sangat
                penting untuk kehidupan dalam segala bidang."
                data_modal="staticModal5"
              />
              <Grafik5 chartID="grafik5" data_modal="staticModal5"/>
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
        </div>
      </div>
    </Wrapper>
  );
}
const svg_attr = styled.svg`
clip-rule: evenodd;
fill-rule: evenodd;
`;


const tabindex = styled.div`
tabindex:-1;

`;
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
