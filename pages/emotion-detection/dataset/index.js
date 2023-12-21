import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/emotion-detection/Sidebar";
import BarChart from "../../../components/emotion-detection/BarChart";
import PieChart from "../../../components/emotion-detection/PieChart";
import { useEmotionContext } from "../../../context/EmotionContext";
export default function Dataset() {
  const { myData, setMyData, size, setSize } = useEmotionContext();
  const [alert, setAlert] = useState(null);
  const [emotion, setEmotion] = useState("6");
  const [text, setText] = useState("");
  const emotions = {
    0: "joy",
    1: "sadness",
    2: "anger",
    3: "fear",
    4: "love",
    5: "surprise",
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const deleteLastEntry = () => {
    size[myData[myData.length - 1][1]]--;
    const newData = myData;
    newData.pop();
    setMyData(newData);
    showAlert("Last entry deleted successfully", "success");
  };
  const resetData = () => {
    if (myData.length === 0) {
      showAlert("Your dataset is already empty", "info");
      return;
    }
    const wish = window.confirm("Do you want to reset your dataset ?");
    if (wish) {
      setMyData([]);
      setSize({
        joy: 0,
        sadness: 0,
        anger: 0,
        fear: 0,
        love: 0,
        surprise: 0,
      });
      showAlert("Your dataset is reset successfully", "success");
    }
  };
  const toggleData = () => {
    const btn = document.getElementById("showmy");
    if (btn.textContent === "Show My Data") {
      if (myData.length === 0) {
        showAlert("You have no data in your dataset.", "info");
        return;
      }
      btn.textContent = "Hide My Data";
    } else {
      btn.textContent = "Show My Data";
    }
    const myDiv = document.getElementById("my_data");
    myDiv.classList.toggle("visible");
  };
  const handleTextOnChange = (event) => {
    setText(event.target.value);
  };
  const handleEmotionOnChange = (event) => {
    setEmotion(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text.trim()) {
      showAlert("Please provide some text", "warning");
      return;
    }
    if (emotion === "6") {
      showAlert("Please select emotion-class", "warning");
      return;
    }
    const newData = myData;
    newData.push([text, emotions[emotion]]);
    setMyData(newData);
    size[emotions[emotion]]++;
    showAlert("your data is added successfully", "success");
    setText("");
    setEmotion("6");
  };

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
                Dataset Comparision
              </h1>
            </div>
            <div className="container" style={{ marginTop: "10px" }}>
              <div
                style={{
                  fontFamily: "Helvetica Neue",
                  textAlign: "justify",
                  fontSize: "20px",
                }}
              >
                <p>
                  Let us Imagine you have two sets (datasets) of colorful toys,
                  and each toy represents a different feeling. We have six
                  feelings: joy, sadness, anger, fear, love, and surprise.
                </p>
                <p>
                  Now,let us say we have two groups of toys (datset-1 and
                  dataset-2), and each of group has a different number of toys
                  for each feeling.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div
                    style={{
                      fontFamily: "Helvetica Neue",
                      textAlign: "justify",
                      fontSize: "20px",
                    }}
                  >
                    <h3>DataSet-1</h3>
                    <p>
                      In the first group, we have a lot of happy toys (joy), a
                      lot of sad toys (sadness), some mad toys (anger), a few
                      scared toys (fear), some warm and fuzzy toys (love), and a
                      few amazed toys (surprise).
                    </p>
                    <br />
                  </div>
                  <BarChart
                    chartId="mychart1"
                    data={[1000, 1000, 400, 200, 300, 100]}
                  />
                  <PieChart
                    chartId="mychart2"
                    data={[1000, 1000, 400, 200, 300, 100]}
                  />
                </div>
                <div className="col-lg-6">
                  <div
                    style={{
                      fontFamily: "Helvetica Neue",
                      textAlign: "justify",
                      fontSize: "20px",
                    }}
                  >
                    <h3>DataSet-2</h3>
                    <p>
                      In the second group, we have fewer happy toys (joy), a bit
                      fewer sad toys (sadness), fewer mad toys (anger), even
                      fewer scared toys (fear), almost the same number of warm
                      and fuzzy toys (love), and fewer amazed toys (surprise).
                    </p>
                  </div>
                  <BarChart
                    chartId="mychart3"
                    data={[500, 469, 420, 371, 421, 319]}
                  />
                  <PieChart
                    chartId="mychart4"
                    data={[500, 469, 420, 371, 421, 319]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
