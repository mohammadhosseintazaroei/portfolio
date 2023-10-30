import { Box, CircularProgress, Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import { motion, type Variants } from 'framer-motion';
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
import { MousemoveWrapper } from './mousemove-wrapper';

interface Repo {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
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

  const repoCardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

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
          {!profileData?.avatar_url && (
            <Skeleton variant="rounded" height={280} width={280} sx={styles.profileImageSkeleton} />
          )}
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
        <Grid item xs={6} sx={{ transform: 'scale(0.7) translateY(-218px)' }}>
          <Box sx={styles.topImages}>
            <MousemoveWrapper
              child={<Box component={'img'} src={express} sx={styles.express} />}
              xSide={50}
              ySide={50}
            />
            <MousemoveWrapper child={<Box component={'img'} src={nodejs} sx={styles.nodejs} />} xSide={30} ySide={30} />
            <MousemoveWrapper child={<Box component={'img'} src={html} sx={styles.html} />} xSide={60} ySide={60} />
          </Box>

          <MousemoveWrapper
            child={
              <Box sx={styles.githubWrapper}>
                <Box component={'img'} src={github} sx={styles.github} />
              </Box>
            }
            xSide={20}
            ySide={20}
            minusNumber={80}
          />

          <Box component={'img'} src={github} sx={styles.githubFake} />

          <MousemoveWrapper child={<Box component={'img'} src={typescript} sx={styles.ts} />} xSide={60} ySide={60} />
          <Box sx={styles.bottomImages}>
            <MousemoveWrapper child={<Box component={'img'} src={css} sx={styles.css} />} xSide={60} ySide={60} />
            <MousemoveWrapper child={<Box component={'img'} src={react} sx={styles.react} />} xSide={60} ySide={60} />
            <MousemoveWrapper child={<Box component={'img'} src={typescript} sx={styles.ts} />} xSide={60} ySide={60} />
            <MousemoveWrapper child={<Box component={'img'} src={gql} sx={styles.gql} />} xSide={60} ySide={60} />
          </Box>
        </Grid>
      </Grid>

      {repos?.length ? (
        <Grid container sx={styles.reposGridContainer} spacing={3}>
          {repos?.map((repo) => {
            return (
              <Grid xs={6} item>
                <Box
                  component={motion.div}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Box component={motion.div} variants={repoCardVariants}>
                    <Box component={'a'} href={repo.html_url} target="_blank" sx={styles.repoCardLink}>
                      <Box sx={styles.reposContainer}>
                        <Grid container>
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
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
