import { connect } from 'react-redux';
import defaultImg from '../../images/default-avatar.jpg';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import style from './UserMenu.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = ({ avatar, email, onSingout }) => {
  return (
    <div className={style.userMenu}>
      <div className={style.persInfo}>
        <img src={avatar} alt="" width="32" className={style.avatar} />
        <span className={style.email}>{email}</span>
      </div>
      <button type="button" onClick={onSingout} className={style.btn}>
        {/* Sing out */}
        <ExitToAppIcon />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  avatar: defaultImg,
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onSingout: authOperations.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
