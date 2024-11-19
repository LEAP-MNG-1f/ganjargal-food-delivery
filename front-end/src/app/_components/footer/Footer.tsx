import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/visbe.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full bg-[#18BA51] "
    >
      <React.Fragment>
        <CssBaseline />
        <Container sx={{ bgcolor: "#cfe8fc", height: "1500px" }} maxWidth="lg">
          <div>
            <p>food delivery</p>
            <div className="flex gap-4">
              <p>Нүүр</p>
              <p>Холбоо барих</p>
              <p>Хоолны цэс</p>
              <p>Үйлчилгээний нөхцөл</p>
              <p>Хүргэлтийн бүс</p>
              <p>Нууцлалын бодлого</p>
            </div>
            <div className="flex gap-4">
              <img src="/facebook.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/tiw.png" alt="" />
            </div>
            <div>
              <p>© 2024 Pinecone Foods LLC </p>
              <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};
