// import "./styles.css";
import { Box, Grid, Skeleton } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { menuCardGlobalStyles } from '../';
import styles from './github-card.styles';
import { sxSeparator } from '../../../utils/sxSeparator';

const titleVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function GitCard() {
  return (
    <>
      <Box sx={menuCardGlobalStyles.cardWrapper}>
        <motion.div variants={titleVariants}>
          <Box sx={menuCardGlobalStyles.headerWrapper}></Box>
          <Box sx={menuCardGlobalStyles.cardContent}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Skeleton variant="rounded" height={60} width={60} sx={styles.profile} />
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Skeleton variant="text" height={20} width={80} />
                    <Skeleton variant="text" height={10} width={80} />
                    <Skeleton variant="text" height={10} width={80} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={4}>
                    <Skeleton
                      variant="rounded"
                      height={30}
                      width={30}
                      sx={[sxSeparator(styles.topLeft), sxSeparator(styles.profile)]}
                    />

                    <Skeleton variant="rounded" height={30} width={30} sx={styles.profile} />
                    <Skeleton
                      variant="rounded"
                      height={30}
                      width={30}
                      sx={[sxSeparator(styles.bottomLeft), sxSeparator(styles.profile)]}
                    />
                  </Grid>
                  <Grid item xs={4} display={'flex'} alignItems={'center'}>
                    <Skeleton variant="rounded" height={30} width={30} sx={styles.profile} />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton
                      variant="rounded"
                      height={30}
                      width={30}
                      sx={[sxSeparator(styles.topRight), sxSeparator(styles.profile)]}
                    />
                    <Skeleton variant="rounded" height={30} width={30} sx={styles.profile} />
                    <Skeleton
                      variant="rounded"
                      height={30}
                      width={30}
                      sx={[sxSeparator(styles.bottomRight), sxSeparator(styles.profile)]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={styles.repoCardWrapper}>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={30} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
