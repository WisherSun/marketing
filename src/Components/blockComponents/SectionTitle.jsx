import React from "react";

function SectionTitle(props) {
  return (
    <>
      <style>
        {`.box{
        position: relative;
            width: 90px;
            height: 10px;
            margin: 0 auto 5px;
            }
        
        .line{
        position: absolute;
              top: 4px;
              left: 0;
              width: 100%;
              height: 3px;
              background: #0096ff;
        }

        .point{
              position: absolute;
              top: 0;
              left: 0;
              width: 10px;
              height: 10px;
              background: #0096ff;
              border-radius: 50%;
              animation: slideBallToRight 1.5s linear infinite alternate;
        }

          @keyframes slideBallToRight {
            from {
              left: 0;
            }
            to {
              left: calc(100% - 10px);
            }
          }

          @keyframes slideBallToLeft {
            from {
              left: calc(100% - 10px);
            }
            to {
              left: 0;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: "700px", textAlign: "center", margin: "0 auto" }}>
        <h2>{props.title}</h2>

        <div className="box">
          <div className="line"/>
          <div className="point"/>
        </div>

        <div className="box">
          <div className="line"/>

          <div  className="point"
            style={{animation: 'slideBallToLeft 1.5s linear infinite alternate'}}/>
        </div>

        <p>{props.subtitle}</p>
      </div>
    </>
  );
}

export default SectionTitle;