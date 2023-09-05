import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ChevronsLeft, Home } from 'react-feather';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { panelEntities } from '../../../router/entities';
import { sxSeparator } from '../../../utils/sxSeparator';

export default function HeaderMenu() {
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
        if (currentUrl === page.path) setPageIndex(index);
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
    <>
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
                top: `${homeIconTop}px`,
              },
            }}
          ></Box>
          <Link component={RouterLink} to="/">
            <Box ref={homeIconRef} onClick={(e) => handleCloseNavMenu(e)}>
              <Home size={50} />
            </Box>
          </Link>
          <Box display={'flex'} ref={menu}>
            {panelEntities.map((page, index) => {
              return (
                <Link component={RouterLink} to={page.path} sx={{ marginRight: '64px' }}>
                  <Typography
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
                      sxSeparator(currentUrl === page.path && { color: (theme) => theme.palette.neutral.lighter }),
                    ]}
                  >
                    {page.title}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Stack spacing={2}>
        <Breadcrumbs separator={<ChevronsLeft size="16" />} aria-label="breadcrumb">
          {panelEntities.map(
            (panelItem, index) =>
              panelItem.path == currentUrl && (
                <Link component={RouterLink} to={panelItem.path} key={index}>
                  {panelItem.title}
                </Link>
              )
          )}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
