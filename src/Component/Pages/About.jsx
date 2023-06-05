import React from "react";
import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../Style/About.css";

const About = () => {
  return (
    <div className="AboutImage">
      <Layout>
        {/* style={{ backgroundImage: `url(${Banner})` }} */}
        <Box
          sx={{
            my: 11,
            textAlign: "center",
            p: 10,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2.2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mb: 0,
              
            },
          }}
        >
          <Typography variant="h4">Welcome To Henakul Restuarant</Typography>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            voluptatum architecto dignissimos, distinctio ipsum similique quam
            quas incidunt. Non corrupti esse sit nihil laboriosam, eligendi
            incidunt tempore eveniet rem a quibusdam deleniti. Esse, fugit
            obcaecati qui necessitatibus magni non odit tempore amet. Excepturi
            at ad similique magnam repudiandae fuga cupiditate voluptatem
            adipisci sapiente ex blanditiis enim quibusdam minima sequi facilis
            iste, perferendis nostrum earum illo sed corrupti! Sapiente adipisci
            eveniet corporis voluptates, minima dolores consequatur, distinctio
            optio similique doloribus, libero beatae possimus maiores
            necessitatibus. Corporis distinctio minima sequi fuga? Adipisci
            inventore nemo cum eaque obcaecati dolorum, unde assumenda debitis
            natus?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic,
            dolor, cumque voluptatem alias dolores minus, maxime praesentium
            voluptatibus debitis eligendi molestiae explicabo repellat! Corporis
            quis vel facere quam aut laudantium. Numquam cupiditate
            necessitatibus, voluptates aliquid hic maiores inventore, iusto
            doloribus deserunt saepe voluptas dolore consequatur. Sapiente sunt
            earum dicta qui natus maiores quibusdam adipisci unde atque quas
            pariatur obcaecati repudiandae iste, fuga, consectetur animi
            asperiores a architecto magni perferendis. Doloribus enim porro ipsa
            corrupti excepturi. Corrupti et architecto optio quisquam
            laudantium, magni quia officia mollitia nisi sunt ipsam suscipit est
            temporibus iste cupiditate eum culpa illo eos quibusdam reiciendis.
          </p>
        </Box>
      </Layout>
    </div>
  );
};

export default About;
