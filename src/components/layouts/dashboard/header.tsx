import { AppBar, Avatar, Box, Link, Toolbar, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import { panelEntities } from '../../../router/entities';
import { sxSeparator } from '../../../utils/sxSeparator';
import headerStyles from './header.style';

const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [menuItemLeftOffset, setMenuItemLeftOffset] = useState<number>();
  const [menuItemWidth, setMenuItemWidth] = useState<number>();
  const [homeIconTop, setHomeIconTop] = useState<number>();
  const [pageIndex, setPageIndex] = useState<number | null>(null);
  const menu = useRef<HTMLDivElement>();
  const homeIconRef = useRef<HTMLDivElement>();

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

  return (
    <AppBar position="sticky" enableColorOnDark sx={headerStyles.headerWrapper}>
      <Toolbar sx={headerStyles.headerToolbar}>
        <Link component={RouterLink} to="/">
          <Box ref={homeIconRef} onClick={(e) => handleCloseNavMenu(e)}>
            <Avatar src={Logo} sx={headerStyles.logo} />
          </Box>
        </Link>{' '}
        <Box sx={headerStyles.menuContainer} component="div">
          <Box>
            <Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Box
                  className={`border ${currentUrl == '/' && 'home'}`}
                  sx={{
                    background: '#fff',
                    width: `${menuItemWidth ?? 0}px`,
                    height: '6px',
                    borderRadius: '10px 10px 100px 100px',
                    top: `${menuItemWidth ? '0' : '-10'}px`,
                    position: 'absolute',
                    left: `${menuItemLeftOffset ?? 0}px`,
                    color: '#fff0',
                    transition: '500ms',

                    '&.border:has(~ .pageClicked)': {
                      color: 'red',
                    },
                    '&.home': {
                      top: `${homeIconTop ? homeIconTop + 15 : 0}px`,
                      height: '8px',
                    },
                  }}
                ></Box>

                <Box display={'flex'} ref={menu}>
                  {panelEntities.map((page, index) => {
                    const [isTrue, setIsTrue] = useState(false);
                    console.log(isTrue);
                    return (
                      <>
                        {page.title && (
                          <motion.nav
                            initial={false}
                            animate={isTrue ? 'open' : 'closed'}
                            style={{ marginRight: '64px' }}
                          >
                            <Link component={RouterLink} to={page.path}>
                              <Typography
                                onMouseEnter={() => {
                                  setIsTrue(true);
                                }}
                                onMouseLeave={() => {
                                  setIsTrue(false);
                                  console.log(isTrue);
                                }}
                                variant="heading2"
                                key={index}
                                onClick={(e) => handleCloseNavMenu(e)}
                                className={`${currentUrl === page.path && 'pageClicked'}`}
                                sx={[
                                  {
                                    display: 'block',
                                    fontWeight: '400',

                                    cursor: 'pointer',
                                    '&:hover': {
                                      color: (theme) => theme.palette.neutral.light,
                                    },
                                    '&.pageClicked ~ .border': {
                                      display: 'flex',
                                    },
                                  },
                                  sxSeparator(
                                    currentUrl === page.path && { color: (theme) => theme.palette.neutral.lighter }
                                  ),
                                ]}
                              >
                                {page.title}
                              </Typography>
                              <>
                                <motion.ul
                                  variants={{
                                    open: {
                                      clipPath: 'inset(0% 0% 0% 0% round 10px)',
                                      transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05,
                                      },
                                    },
                                    closed: {
                                      clipPath: 'inset(10% 50% 90% 50% round 10px)',
                                      transition: {
                                        type: 'spring',
                                        bounce: 0,
                                        duration: 0.3,
                                      },
                                    },
                                  }}
                                  // style={{ pointerEvents: isOpen ? 'auto' : 'none', background: 'blue' }}
                                >
                                  {page.menuCard}
                                </motion.ul>
                              </>
                            </Link>
                          </motion.nav>
                        )}
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
