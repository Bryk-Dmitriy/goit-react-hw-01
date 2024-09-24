import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className={css.profileContainer}>
  <div className={css.firstWrapper}>
    <img
      className={css.avatarImage}
      src={image}
      alt="User avatar"
      width={200}
    />
    <p><b>{name}</b></p>
    <p style={{ color: 'gray' }}>@{tag}</p>
    <p style={{ color: 'gray' }}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li>
      <span>Followers</span>
      <span><b>{stats.followers}</b></span>
    </li>
    <li>
      <span>Views</span>
      <span><b>{stats.views}</b></span>
    </li>
    <li>
      <span>Likes</span>
      <span><b>{stats.likes}</b></span>
    </li>
  </ul>
</div>
)
}





