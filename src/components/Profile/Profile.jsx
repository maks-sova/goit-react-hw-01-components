import PropTypes from "prop-types";
import css from "./Profile.module.css";




export const Profile = (props) => {
    const {
        username,
        tag,
        location,
        avatar,
        stats:
        { followers, views, likes },
    } = props;
    
        return (
            <div className={css.profile}>
                <div className={css.description}>
                <img
                        src={avatar}
                        alt="User avatar"
                        name="avatar"
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            

                    <ul className={css.stats}>
                <li>
                    <span classNames={css.label}>Followers</span>
                        <span className={css.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
                </ul>
            </div>
        </div>
    );
};
export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
            followers:PropTypes.string,
            views:PropTypes.string,
            likes:PropTypes.string,
    }).isRequired
}