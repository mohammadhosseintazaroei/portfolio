import { Box, CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import react from '../../assets/images/Vector.png';
import css from '../../assets/images/css 4.png';
import express from '../../assets/images/express-js 1.png';
import github from '../../assets/images/github 2.png';
import gql from '../../assets/images/graphql 1.png';
import html from '../../assets/images/html 1.png';
import nodejs from '../../assets/images/nodejs 1.png';
import typescript from '../../assets/images/typescript 1.png';
import { TypoText } from '../globals/typo-text';
import styles from './github.style';
interface Repo {
  name: string;
  description: string;
  topics: string[];
}
interface ProfileData {
  name: string;
  avatar_url: string;
  login: string;
  bio: string;
}
export function GitHubPage() {
  const [repos, setRepos] = useState<Repo[]>();
  const [profileData, setProfileData] = useState<ProfileData>();
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

    axios
      .get('https://api.github.com/users/mohammadhosseintazaroei')
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <Box sx={styles.gitHubStyles}>
      <Grid container sx={styles.profileContainer}>
        <Grid item xs={6}>
          {profileData?.avatar_url && <Box component={'img'} src={profileData?.avatar_url} sx={styles.profileImage} />}
          <Box>
            <Box sx={styles.profileName}>{profileData?.name}</Box>
          </Box>
          <Box>
            <Box sx={styles.loginName}>{profileData?.login}</Box>{' '}
          </Box>
          <Box>
            <Box sx={styles.profileBio}>{profileData?.bio}</Box>{' '}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={styles.topImages}>
            <Box component={'img'} src={express} sx={styles.express} />
            <Box component={'img'} src={nodejs} sx={styles.nodejs} />
            <Box component={'img'} src={html} sx={styles.html} />
          </Box>

          <Box sx={styles.githubWrapper}>
            <Box component={'img'} src={github} sx={styles.github} />
          </Box>
          <Box component={'img'} src={github} sx={styles.githubFake} />

          <Box sx={styles.bottomImages}>
            <Box component={'img'} src={css} sx={styles.css} />
            <Box component={'img'} src={react} sx={styles.react} />
            <Box component={'img'} src={typescript} sx={styles.ts} />
            <Box component={'img'} src={gql} sx={styles.gql} />
          </Box>
        </Grid>
      </Grid>
      {repos?.length ? (
        <Grid container columnGap={3} sx={styles.reposGridContainer}>
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
