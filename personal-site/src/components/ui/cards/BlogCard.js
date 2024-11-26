import React from 'react';
import { Card, CardContent } from '../card';

const BlogCard = ({ 
  title,
  description,
  lastPost,
  updated,
  image,
  url
}) => {
  return (
    <Card className="w-72 hover:shadow-lg transition-shadow duration-200 bg-white shrink-0">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          {image}
          <div className="flex-1">
            <a href={url}>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
            </a>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <p className="text-sm text-gray-500">Latest: {lastPost}</p>
            <p className="text-sm text-gray-500">Updated: {updated}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;