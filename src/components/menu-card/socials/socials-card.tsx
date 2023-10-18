// import "./styles.css";
import { Box, Grid, Skeleton } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { menuCardGlobalStyles } from '..';
import styles from './socials-card.styles';

const titleVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function SocialsCard() {
  return (
    <>
      <Box sx={menuCardGlobalStyles.cardWrapper}>
        <motion.div variants={titleVariants}>
          <Box sx={menuCardGlobalStyles.cardContent}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Skeleton variant="rectangular" height={70} />
              </Grid>
              <Grid item xs={2}>
                <Grid item xs={1}>
                  <Skeleton sx={styles.socialsIcon} variant="rectangular" width={210 / 5} height={30} />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton sx={styles.socialsIcon} variant="rectangular" width={210 / 5} height={30} />
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid item xs={1}>
                  <Skeleton sx={styles.socialsIcon} variant="rectangular" width={210 / 5} height={30} />
                </Grid>
                <Grid item xs={1}>
                  <Skeleton sx={styles.socialsIcon} variant="rectangular" width={210 / 5} height={30} />
                </Grid>
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={30} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={50} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={50} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={50} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={50} />
              </Grid>
              <Grid item xs={12 / 5}>
                <Skeleton variant="text" width={210 / 5} height={50} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
