import { AppBar, Avatar, Box, Button, Link, Toolbar, Typography, useTheme } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { type Variants, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Menu } from 'react-feather';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import { panelEntities } from '../../../router/entities';
import { sxSeparator } from '../../../utils/sxSeparator';
import { headerStyles as styles } from './header.style';
const mobileMenuItemVarients: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 40, transition: { duration: 0.2 } },
};
const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>();

  const [menuItemLeftOffset, setMenuItemLeftOffset] = useState<number>();
  const [menuItemWidth, setMenuItemWidth] = useState<number>();
  const [homeIconTop, setHomeIconTop] = useState<number>();
  const [pageIndex, setPageIndex] = useState<number | null>(null);
  const [isHoveredItemPath, setIsHoveredItemPath] = useState<string | null>(null);

  const menu = useRef<HTMLDivElement>();
  const homeIconRef = useRef<HTMLDivElement>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleCloseNavMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    setMenuItemLeftOffset(target.offsetLeft);
    setMenuItemWidth(target.clientWidth);
    if (currentUrl === '/') {
      setMenuItemWidth(homeIconRef.current?.clientWidth);
      setMenuItemLeftOffset(target?.offsetLeft);
      setHomeIconTop(target?.clientHeight + target?.offsetTop);
    }
  };

  useEffect(() => {
    {
      panelEntities.map((page, index) => {
        if (currentUrl === page.path) setPageIndex(index - 1);
        if (currentUrl === '/') {
          setPageIndex(null);
          setMenuItemWidth(homeIconRef.current?.clientWidth);
          setMenuItemLeftOffset(homeIconRef.current?.offsetLeft);
          setHomeIconTop((homeIconRef.current?.clientHeight ?? 0) + (homeIconRef.current?.offsetTop ?? 0));
        }
      });
    }

    if (pageIndex != null) {
      setMenuItemLeftOffset((menu.current?.children[pageIndex] as HTMLElement)?.offsetLeft);
      setMenuItemWidth(menu.current?.children[pageIndex]?.clientWidth);
    }
  });
  const handleClickMobileMenuButton = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <AppBar enableColorOnDark sx={styles.headerWrapper}>
      {matches ? (
        <Toolbar sx={styles.headerToolbar}>
          <Link component={RouterLink} to="/">
            <Box ref={homeIconRef} onClick={(e) => handleCloseNavMenu(e)}>
              <Avatar src={Logo} sx={styles.logo} />
            </Box>
          </Link>
          <Box
            className={`border ${currentUrl == '/' && 'home'}`}
            sx={[
              sxSeparator(styles.animateBorder),
              {
                width: `${(menuItemWidth ?? 0) + 20}px`,
                top: `${menuItemWidth ? '0' : '-10'}px`,
                left: `${(menuItemLeftOffset ?? 0) - 10}px`,
                '&.home': {
                  top: `${homeIconTop ? homeIconTop + 15 : 0}px`,
                  height: '8px',
                },
              },
            ]}
          ></Box>
          <Box sx={styles.menuWrapper} ref={menu}>
            {panelEntities.map((page, index) => {
              return (
                <>
                  {page.title && (
                    <Box
                      component={motion.div}
                      initial={false}
                      animate={isHoveredItemPath === page.path ? 'open' : 'closed'}
                      sx={styles.menuItemWrapper}
                    >
                      <Link component={RouterLink} to={page.path}>
                        <Typography
                          onMouseEnter={() => {
                            setIsHoveredItemPath(page.path);
                          }}
                          onMouseLeave={() => {
                            setIsHoveredItemPath(null);
                          }}
                          variant="heading3"
                          key={index}
                          onClick={(e) => handleCloseNavMenu(e)}
                          className={`${currentUrl === page.path && 'pageClicked'}`}
                          sx={[
                            sxSeparator(styles.menuItem),
                            sxSeparator(currentUrl === page.path && styles.activeMenuItem),
                          ]}
                        >
                          {page.title}
                        </Typography>
                        <Box
                          component={motion.div}
                          onMouseEnter={() => {
                            setIsHoveredItemPath(page.path);
                          }}
                          onMouseLeave={() => {
                            setIsHoveredItemPath(null);
                          }}
                          variants={{
                            open: {
                              clipPath: 'inset(0% 0% 0% 0% round 0px)',
                              transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.6,
                                delayChildren: 0.2,
                                staggerChildren: 0.05,
                              },
                            },
                            closed: {
                              clipPath: 'inset(10% 100% 90% 0% round 10px)',
                              transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.7,
                              },
                            },
                          }}
                          sx={styles.menuCardWrapper}
                        >
                          {page.menuCard}
                        </Box>
                      </Link>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Toolbar>
      ) : (
        <Toolbar sx={styles.headerToolbarMobile}>
          <Link component={RouterLink} to="/">
            <Box ref={homeIconRef} onClick={(e) => handleCloseNavMenu(e)}>
              <Avatar src={Logo} sx={styles.logo} />
            </Box>
          </Link>{' '}
          <Box component={motion.nav} initial={false} animate={openMobileMenu ? 'open' : 'closed'}>
            <Box
              component={motion.nav}
              variants={{
                open: {
                  clipPath: 'inset(0% 0% 0% 0% round 0px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.6,
                    delayChildren: 0.2,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: 'inset(0% 0% 100% 0% round 0)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.7,
                  },
                },
              }}
              sx={styles.mobileMenuItemWrapper}
            >
              {panelEntities.map((page, index) => {
                return (
                  <>
                    {page.title && (
                      <Box component={motion.div} variants={mobileMenuItemVarients}>
                        <Box
                          component={motion.div}
                          initial={false}
                          animate={isHoveredItemPath === page.path ? 'open' : 'closed'}
                          sx={styles.mobileMenuItem}
                        >
                          <Link component={RouterLink} to={page.path} onClick={handleClickMobileMenuButton}>
                            <Typography
                              onMouseEnter={() => {
                                setIsHoveredItemPath(page.path);
                              }}
                              onMouseLeave={() => {
                                setIsHoveredItemPath(null);
                              }}
                              variant="heading3"
                              key={index}
                              onClick={(e) => handleCloseNavMenu(e)}
                              className={`${currentUrl === page.path && 'pageClicked'}`}
                              sx={[
                                sxSeparator(styles.menuItem),
                                sxSeparator(styles.mobileMenuItemText),
                                sxSeparator(currentUrl === page.path && styles.activeMenuItem),
                              ]}
                            >
                              {page.title}
                            </Typography>
                          </Link>
                        </Box>
                      </Box>
                    )}
                  </>
                );
              })}
            </Box>
          </Box>
          <Button onClick={handleClickMobileMenuButton} sx={styles.hamburgerMenuButton}>
            <Menu />
          </Button>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
