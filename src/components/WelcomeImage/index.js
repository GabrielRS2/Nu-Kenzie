import "./index.css";

function WelcomeImage() {
  return (
    <div className="circle circle_one">
      <div className="circle circle_two">
        <div className="circle circle_three"></div>
        <div className="image_container">
          <div className="balls_container">
            <div className="ball ball_pink"></div>
            <div className="ball ball_green"></div>
            <div className="ball ball_black"></div>
          </div>
          <div className="rectangle_container">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
          </div>
        </div>
        <div className="green_rectangle">
          <div className="green_icon">
            <div className="green_top"></div>
            <div className="green_bottom"></div>
          </div>
          <div className="green_rectangle_container">
            <div className="rectangle_one"></div>
            <div className="rectangle_two"></div>
          </div>
        </div>
        <div className="red_rectangle">
          <div className="red_icon">
            <div className="red_top"></div>
            <div className="red_bottom"></div>
          </div>
          <div className="red_rectangle_container">
            <div className="rectangle_three"></div>
            <div className="rectangle_four"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeImage 