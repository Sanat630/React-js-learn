import cardimg from "../Images/image 12.png";
import star from "../Images/Star.svg";

function Card() {
    return (
        <div className="card">
            <img src={cardimg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}


export default Card;
