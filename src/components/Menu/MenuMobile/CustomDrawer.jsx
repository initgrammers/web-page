import PropTypes from 'prop-types';
import { Collapse, makeStyles } from '@material-ui/core';
import ListMenu from './ListMenu';
import styles from './styles';

const useStyles = makeStyles(styles);
const CustomDrawer = ({ open, onClose, indexMenu }) => {
  const classes = useStyles();
  return (
    <Collapse in={open} className={classes.drawer} unmountOnExit>
      <ListMenu indexMenu={indexMenu} onClose={onClose} />
    </Collapse>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};
CustomDrawer.defaultProps = {
  open: false,
};

export default CustomDrawer;
