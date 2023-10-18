import { Box, CircularProgress, Grid } from '@mui/material';
import styles from './github.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TypoText } from '../globals/typo-text';

interface Repo {
  name: string;
  description: string;
  topics: string[];
}
export function GitHubPage() {
  const [repos, setRepos] = useState<Repo[]>();
  useEffect(() => {
    axios
      .get('https://api.github.com/users/mohammadhosseintazaroei/repos')
      .then((response) => {
        const repos = response.data;
        setRepos(repos);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <Box sx={styles.gitHubStyles}>
      {repos?.length ? (
        <Grid container columnGap={3}>
          {repos?.map((repo) => {
            return (
              <>
                <Grid xs={5} sx={styles.reposContainer}>
                  <Grid item xs={12}>
                    <TypoText variant="bodyCopyXLHeavy" sx={styles.repoName}>
                      {repo?.name}
                    </TypoText>
                  </Grid>
                  <Grid item xs={12}>
                    <TypoText variant="bodyCopyMRegular" sx={styles.repoDescription}>
                      {repo?.description}
                    </TypoText>
                  </Grid>
                  <Grid item xs={12}>
                    {repo?.topics?.map((topic) => (
                      <>
                        <Box component={'span'} sx={styles.circle}></Box>
                        <Box component={'span'} sx={styles.repoTopics}>
                          {topic}
                        </Box>
                      </>
                    ))}
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
