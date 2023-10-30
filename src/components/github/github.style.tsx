import { type SxProps, type Theme } from '@mui/material';

const gitHubStyles: Record<string, SxProps<Theme>> = {
  gitHubStyles: {
    p: 5,
  },
  reposGridContainer: {
    justifyContent: 'center',
  },
  reposContainer: {
    mb: 5,
    background: '#161616',
    p: 2,
    borderRadius: 2,
    transition: '.2s',
    '&:hover': {
      background: '#101010',
      cursor: 'pointer',
    },
  },
  repoImage: {
    width: '100%',
    height: '100px',
  },
  repoTopics: {
    color: (theme) => theme.palette.neutral.light,
    mr: 2,
  },
  circle: {
    width: '10px',
    height: '10px',
    background: (theme) => theme.palette.primary.lightest,
    display: 'inline-block',
    mr: 1,
    borderRadius: 3,
  },
  repoName: {
    color: '#7c7786',
  },
  repoDescription: {
    color: (theme) => theme.palette.neutral.main,
  },
  profileImage: {
    borderRadius: '50%',
    width: '386',
    mb: 2,
  },
  profileName: {
    color: '#fff',
    fontSize: 30,
    mb: 1,
  },
  loginName: {
    fontSize: 27,
    color: '#7F7F7F',
    fontWeight: '500',
    mb: 2,
  },
  profileBio: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'lighter',
  },
  profileContainer: {
    mb: 30,
    textAlign: 'center',
  },
  topImages: {
    position: 'relative',
    mb: 14,
  },
  express: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  nodejs: {
    position: 'absolute',
    top: 0,
    left: 280,
  },
  html: {
    position: 'absolute',
    top: 250,
    left: 450,
  },
  githubWrapper: {
    position: 'relative',
  },
  github: {
    p: 10,
    position: 'absolute',
    left: 0,
  },
  githubFake: {
    p: 10,
    visibility: 'hidden',
  },
  bottomImages: {
    position: 'relative',
  },
  css: {
    position: 'absolute',
    top: -350,
    left: -100,
  },
  react: {
    position: 'absolute',
    top: -150,
    left: -60,
  },

  ts: {
    position: 'absolute',
    top: -70,
    left: 150,
  },
  gql: {
    position: 'absolute',
    top: -100,
    left: 350,
  },
};

export default gitHubStyles;
