import React from "react";
import Sidebar from "../../../components/emotion-detection/Sidebar";
import DoubleX from "../../../components/emotion-detection/DoubleX";
export default function Conclusion(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 ">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <div style={{ textAlign: "center" }}>
              <h1
                className="heading"
                style={{
                  textAlign: "center",
                  background:
                    "radial-gradient(circle at 10% 20%, rgb(255, 12, 253) 0%, rgb(255, 241, 0) 80%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Helvetica Neue",
                  display: "inline",
                }}
              >
                Concept Of Bias
              </h1>
            </div>
            <div
              style={{
                fontFamily: "Helvetica Neue",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              <p>
                Now, let us talk about bias. Bias is like if one group of
                friends has more of a specific type of toy than the other group.
                It is not necessarily wrong, but we need to be aware of it.
              </p>
              <p>
                In our toy world, What will happen when a child sees toys around
                them and among their friends? If toys are in a biased condition,
                he will also choose toys from the same category if he
                doesn&apos;t know what kind of toy he likes or wants to play.
              </p>
              <p>
                In the same way, If computer could not get exact feelings from
                the given text, it moves towards bias prediction. As you can see
                from dataset-1 and dataset-2 that dataset-1 is bias towards joy
                and sadness emotion.
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DoubleX chartId="myChart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
