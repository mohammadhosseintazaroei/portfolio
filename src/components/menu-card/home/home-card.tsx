// import "./styles.css";
import { Box, Grid, Skeleton } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { panelEntities } from '../../../router/entities';
import { menuCardGlobalStyles } from '../';
import styles from './home-card.styles';

const titleVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function HomeCard() {
  return (
    <>
      <Box sx={menuCardGlobalStyles.cardWrapper}>
        <motion.div variants={titleVariants}>
          <Box sx={styles.headerWrapper}>
            <Grid container spacing={1}>
              {panelEntities.map(() => (
                <Grid item xs={12 / 5}>
                  <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={menuCardGlobalStyles.cardContent}>
            <Skeleton sx={styles.homeCardContent} variant="rectangular" height={100} />
            <Grid container spacing={1} sx={styles.homeCardInfoCardWrapper}>
              <Grid item xs={12 / 5}>
                <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton sx={styles.homeCardInfoCard} variant="rectangular" width={210 / 5} height={30} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
