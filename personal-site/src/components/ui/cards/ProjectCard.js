import React from 'react';
import BlogCard from './BlogCard';
import GitHubProjectCard from './GitHubProjectCard';

import { getProjectImage } from '../../../data/projects/index'

const ProjectCard = ({ project }) => {
  const image = getProjectImage(project);
  switch (project.type) {
    case 'github':
      return (
        <GitHubProjectCard
          title={project.title}
          description={project.description}
          lastCommit={project.github.lastCommit}
          stars={project.github.stars}
          forks={project.github.forks}
          image={image}
        />
      );
    case 'blog':
      return (
        <BlogCard
          title={project.title}
          description={project.description}
          lastPost={project.blog.lastPost}
          updated={project.blog.updated}
          image={image}
          // TODO: Check for URL existing
          url={project.url}
        />
      );
    default:
      return null;
  }
};

export default ProjectCard;