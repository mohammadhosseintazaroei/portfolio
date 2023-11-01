import { Box, Grid, Skeleton } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { menuCardGlobalStyles } from '../';
import styles from './projects-card.styles';

const titleVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const ProjectsCard = () => {
  return (
    <>
      <Box sx={menuCardGlobalStyles.cardWrapper}>
        <motion.div variants={titleVariants}>
          <Box sx={menuCardGlobalStyles.headerWrapper}></Box>
          <Box sx={menuCardGlobalStyles.cardContent}>
            <Grid container spacing={1} sx={styles.homeCardInfoCardWrapper}>
              <Grid item xs={7}>
                <Skeleton variant="rectangular" height={60} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton variant="text" />
                <Skeleton variant="text" height={10} />
                <Skeleton variant="text" height={10} />
                <Skeleton variant="text" height={10} />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={styles.homeCardInfoCardWrapper}>
              <Grid item xs={4}>
                <Skeleton variant="text" />
                <Skeleton variant="text" height={10} />
                <Skeleton variant="text" height={10} />
                <Skeleton variant="text" height={10} />
              </Grid>
              <Grid item xs={7}>
                <Skeleton variant="rectangular" height={60} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
