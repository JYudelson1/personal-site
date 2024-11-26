import React from 'react';
import { Card, CardContent } from '../card';
import { Camera } from 'lucide-react';

const BlogCard = ({ 
  title,
  description,
  lastPost,
  updated,
  // Add any other props we might want to display
}) => {
  return (
    <Card className="w-72 hover:shadow-lg transition-shadow duration-200 bg-white shrink-0">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <Camera className="w-6 h-6 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
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