import React from 'react';
import BlogCard from './BlogCard';
import GitHubProjectCard from './GitHubProjectCard';

const ProjectCard = ({ project }) => {
  switch (project.type) {
    case 'github':
      return (
        <GitHubProjectCard
          title={project.title}
          description={project.description}
          lastCommit={project.github.lastCommit}
          stars={project.github.stars}
          forks={project.github.forks}
        />
      );
    case 'blog':
      return (
        <BlogCard
          title={project.title}
          description={project.description}
          lastPost={project.blog.lastPost}
          updated={project.blog.updated}
        />
      );
    default:
      return null;
  }
};

export default ProjectCard;