import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Palette from '@material-ui/icons/Palette';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {
  LeftSidebarThumb,
  LeftSidebarBigThumb,
  TopNavigationThumb,
  MegaMenuThumb,
} from './templatePreview';
import ThemeThumb from './ThemeThumbs';
import LayoutThumb from './LayoutThumb';
import styles from './settings-jss';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TemplateSettings(props) {
  const [type, setType] = useState(0);
  const [show, setShow] = useState(false);
  const [showAllThemes, setShowAllThemes] = useState(false);
  const [dark, setDark] = useState(false); // eslint-disable-line
  const [bgPositionState, setBgPosition] = useState('half'); // eslint-disable-line
  const [decorated, setDecoration] = useState(true); // eslint-disable-line
  const [rtl, setRtl] = useState(false); // eslint-disable-line
  const [gradientState, setGradient] = useState(true); // eslint-disable-line

  // TaB Handle
  const handleChangeTab = (event, typeParam) => {
    setType(typeParam);
  };

  const handleChangeIndexTab = index => {
    setType(index);
  };

  // Theme Mode Handle
  const handleSwitchMode = event => {
    const { changeMode } = props;
    const mode = event.target.checked ? 'dark' : 'light';
    changeMode(mode);
    setDark(event.target.checked);
  };

  const handeSwitchDirection = event => { // eslint-disable-line
    const { changeDirection } = props;
    const dir = event.target.checked ? 'rtl' : 'ltr';
    changeDirection(dir);
    setRtl(event.target.checked);
  };

  // Background Position Handle
  const handleBgChangePosition = event => {
    const { changeBgPosition } = props;
    setBgPosition(event.target.value);
    changeBgPosition(event.target.value);
  };

  // Decoration Handle
  const handleChangeDecoration = event => {
    const { changeDecoration } = props;
    setDecoration(event.target.checked);
    changeDecoration(event.target.checked);
  };

  // Decoration Handle
  const handleChangeGradient = event => {
    const { changeGradient } = props;
    setGradient(event.target.checked);
    changeGradient(event.target.checked);
  };

  // Layout Handle
  const handleChangeLayout = event => {
    const { changeLayout } = props;
    changeLayout(event.target.value);
  };

  // Show Hide Panel
  const handleTogglePanel = () => {
    setShow(!show);
  };

  // Toggle All Themes
  const handleToggleAllThemes = () => {
    setShowAllThemes(!showAllThemes);
  };

  const {
    classes,
    palette,
    mode,
    gradient,
    decoration,
    bgPosition,
    selectedValue,
    layout,
    direction,
    changeTheme,
    changeRandomTheme
  } = props;
  const getItem = dataArray => dataArray.map((item, index) => (
    <FormControlLabel
      key={index.toString()}
      className={
        classNames(
          classes.themeField,
          index > 7 && !showAllThemes ? classes.hide : ''
        )
      }
      control={(
        <ThemeThumb
          value={item.value}
          selectedValue={selectedValue}
          handleChange={changeTheme}
          name={item.name}
        />
      )}
    />
  ));

  return (
    <aside
      className={
        classNames(
          classes.settingSidebar,
          layout === 'right-sidebar' ? classes.leftSidebar : classes.rightSidebar,
          show && classes.expanded
        )
      }
    >
      <div className={classes.toggleButton}>
        <Fab
          size="small"
          color="primary"
          aria-label="toggle"
          className={classes.button}
          onClick={handleTogglePanel}
          classes={{
            root: classes.buttonDrawer,
          }}
        >
          {show ? <Close /> : <Palette />}
        </Fab>
      </div>
      <Slide direction={direction === 'rtl' ? 'right' : 'left'} in={show} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.tab} color="default">
            <div className={classes.header}>
              <IconButton
                onClick={handleTogglePanel}
                className={classes.backButton}
                aria-label="Baack"
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="button">Template Settings</Typography>
            </div>
            <Tabs
              value={type}
              onChange={handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Theme" />
              <Tab label="Layout" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={type}
            onChangeIndex={handleChangeIndexTab}
          >
            <TabContainer>
              <section className={classes.settingWraper}>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>invert_colors</Icon>
                      Theme Mode
                    </FormLabel>
                    <FormGroup className={classes.themeMode}>
                      <span>Light Mode</span>
                      <FormControlLabel
                        className={classes.switch}
                        control={(
                          <Switch
                            checked={mode === 'dark'}
                            onChange={(e) => handleSwitchMode(e)}
                            value="dark"
                            color="default"
                            classes={{
                              track: classes.themeCheckBar,
                              thumb: classes.themeCheck,
                            }}
                          />
                        )}
                      />
                      <span>Dark Mode</span>
                    </FormGroup>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>
                        format_textdirection_r_to_l
                      </Icon>
                      Layout Direction
                    </FormLabel>
                    <FormGroup className={classes.themeMode}>
                      <span>LTR</span>
                      <FormControlLabel
                        className={classes.switch}
                        control={(
                          <Switch
                            checked={direction === 'rtl'}
                            onChange={(e) => handeSwitchDirection(e)}
                            value="rtl"
                            color="default"
                            classes={{
                              track: classes.themeCheckBar,
                              thumb: classes.themeCheck,
                            }}
                          />
                        )}
                      />
                      <span>RTL</span>
                    </FormGroup>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset" className={classes.themeGroup}>
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>color_lens</Icon>
                      Theme Color
                    </FormLabel>
                    <div className={classes.randomThemeField}>
                      <ButtonBase onClick={() => changeRandomTheme()}>
                        <img src="/images/random.jpg" alt="random" />
                      </ButtonBase>
                    </div>
                    { palette !== undefined && getItem(palette) }
                    <div className={classes.center}>
                      <Button color="primary" onClick={handleToggleAllThemes}>
                        {showAllThemes ? 'Hide Some' : 'Show All'}
                      </Button>
                    </div>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>branding_watermark</Icon>
                      Background Size
                    </FormLabel>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="background-position">Choose Size</InputLabel>
                      <Select
                        value={bgPosition}
                        onChange={handleBgChangePosition}
                        inputProps={{
                          name: 'position',
                          id: 'background-position',
                        }}
                      >
                        <MenuItem value="header">Header</MenuItem>
                        <MenuItem value="half">Half</MenuItem>
                        <MenuItem value="full">Full</MenuItem>
                      </Select>
                    </FormControl>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>texture</Icon>
                      Art Decoration
                    </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={decoration}
                            onChange={(e) => handleChangeDecoration(e)}
                            value="decorated"
                          />
                        )}
                        label="Show Art Decoration"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={gradient}
                            onChange={(e) => handleChangeGradient(e)}
                            value="gradient"
                          />
                        )}
                        label="Use Gradient"
                      />
                    </FormGroup>
                  </FormControl>
                </Paper>
              </section>
              {/* END */}
            </TabContainer>
            <TabContainer>
              <section className={classes.settingWraper}>
                <Paper className={classes.optBlock}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>chrome_reader_mode</Icon>
                      Navigation Layout
                    </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="left-sidebar"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Left Sidebar"
                            preview={<LeftSidebarThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="big-sidebar"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Left Big Sidebar"
                            preview={<LeftSidebarBigThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="top-navigation"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Top Navigation"
                            preview={<TopNavigationThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="mega-menu"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Mega Menu"
                            preview={<MegaMenuThumb />}
                          />
                        )}
                      />
                    </FormGroup>
                  </FormControl>
                </Paper>
              </section>
            </TabContainer>
          </SwipeableViews>
        </div>
      </Slide>
    </aside>
  );
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  palette: PropTypes.object,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeRandomTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
