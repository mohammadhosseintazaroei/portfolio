import { type SxProps, type Theme } from '@mui/material';

const gitHubStyles: Record<string, SxProps<Theme>> = {
  gitHubStyles: {
    p: 5,
  },
  reposGridContainer: {
    justifyContent: 'center',
  },
  reposContainer: {
    background: '#161616',
    p: 2,
    borderRadius: 2,
    height: 200,
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
    width: 280,
    mb: 2,
  },
  profileImageSkeleton: {
    borderRadius: '50%',
  },
  profileName: {
    color: '#fff',
    fontSize: 25,
    mb: 0.5,
  },
  loginName: {
    fontSize: 22,
    color: '#7F7F7F',
    fontWeight: '500',
    mb: 1,
  },
  profileBio: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'lighter',
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
  repoCardLink: { textDecoration: 'none' },
};

export default gitHubStyles;
